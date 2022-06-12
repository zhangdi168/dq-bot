package mainbot

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/enums"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk/reply"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/plugin"
	"github.com/zhangdi168/dq-bot/internal/services/sermessage"
	"github.com/zhangdi168/dq-bot/internal/services/seruser"
	"strings"
)

func CoreHandler(event *dto.WSPayload, data *dto.Message) {

	var content string
	if data.DirectMessage {
		content = data.Content
	} else {
		content = data.Content[24:]
	}
	data.Content = content

	go messageSave(data) //开一个协程保存消息
	go checkUser(data)   //开一个协程 检测用户是否存在

	//创建群消息回复对象
	dqAtReply := reply.NewReplyAtMessage(data.ChannelID, data.GuildID, data.ID, data.Author.ID)
	var dqDirectReply reply.IDqReply
	//创建私信消息回复对象
	if data.DirectMessage {
		//私信
		dqDirectReply = reply.NewDirectReply(data.SrcGuildID, data.Author.ID, data.ID)
	} else {
		//艾特
		dqDirectReply = reply.NewDirectReply(data.GuildID, data.Author.ID, data.ID)
	}

	PluginName, KeywordIndex, MatchType := plugin.Match(content)
	//构造传给插件的数据
	paramData := plugin.PluginParams{
		Origin:       (*dto.Message)(data),
		ReplyAt:      dqAtReply,
		ReplyDirect:  dqDirectReply,
		PluginNameEn: PluginName,
	}

	//匹配到插件了
	if PluginName != "" {
		plugin := plugin.Plugins[PluginName]
		switch MatchType {
		case enums.EnumsMatch().Full:
			words := plugin.KeywordsTouch().FullWords //关键词列表
			keyword := words[KeywordIndex].Word
			//构造参数并调用插件函数
			paramData.CoreContent = content          //提取到的核心内容
			paramData.Keyword = keyword              //触发插件的关键词
			words[KeywordIndex].TouchFunc(paramData) //调用触发方法
		case enums.EnumsMatch().Pre:
			words := plugin.KeywordsTouch().FullWords //关键词列表
			keyword := words[KeywordIndex].Word
			//构造参数并调用插件函数
			paramData.CoreContent = strings.Replace(content, keyword, "", -1)
			paramData.Keyword = keyword
			words[KeywordIndex].TouchFunc(paramData)
		case enums.EnumsMatch().Suf:
			words := plugin.KeywordsTouch().SufWords //关键词列表
			keyword := words[KeywordIndex].Word
			//构造参数并调用插件函数
			paramData.CoreContent = strings.Replace(content, keyword, "", -1)
			paramData.Keyword = keyword
			words[KeywordIndex].TouchFunc(paramData)
		case enums.EnumsMatch().In:
			words := plugin.KeywordsTouch().InWords //关键词列表
			keyword := words[KeywordIndex].Word
			//构造参数并调用插件函数
			paramData.CoreContent = content
			paramData.Keyword = keyword
			words[KeywordIndex].TouchFunc(paramData)
		}
	}
}

//一些公共方法
func messageSave(data *dto.Message) {
	service := sermessage.NewMessageService()
	_, err := service.CreateMessage(sermessage.CreateParams{
		Content:   data.Content,
		QqID:      data.Author.ID,
		ChannelID: data.ChannelID,
		GuiId:     data.GuildID,
		MessageID: data.ID,
	})
	if err != nil {
		println(err)
	}
	//获取用户最新n条信息
	_, _ = service.GetLastMsg(data.Author.ID, 100)

}

// 根据qqid检测用户是否存在，不存在则入库
// 查询流程：redis-db 这两个存在一个就会直接返回
// 都不存在数据就插入数据到数据库
func checkUser(data *dto.Message) {
	//member := data.Member
	author := data.Author
	userInfoPre := "userinfo:"
	service := seruser.NewUserSer()

	v, err := service.ReadByCache(author.ID)
	if v != nil {
		//缓存中存在数据
		println(userInfoPre + author.ID + "缓存中存在该用户:" + author.Username)
		return
	}

	info, err := service.GetUserByQQId(author.ID)
	if info == nil {
		if err != nil {
			println(err)
		}
		id, err := service.CreateUser(seruser.CreateUserParams{
			NickName: author.Avatar,
			QQID:     author.ID,
			Avatar:   author.Avatar,
		})

		//重插用户信息 以便写入缓存
		if err == nil {
			info, err = service.GetUserById(id)
		}
	}

	//写入缓存
	service.WriteToCache(info)

}
