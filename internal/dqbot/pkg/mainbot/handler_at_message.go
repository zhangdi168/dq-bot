package mainbot

//本文件主要用于处理机器人消息

import (
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk/reply"
	"strings"

	"github.com/zhangdi168/dq-bot/internal/services/sermessage"
	"github.com/zhangdi168/dq-bot/internal/services/seruser"

	"github.com/tencent-connect/botgo/dto"
)

//atMessageEventHandler 处理 @机器人 的消息
func atMessageEventHandler(event *dto.WSPayload, data *dto.WSATMessageData) error {

	go messageSave(data) //开一个协程保存消息
	go checkUser(data)   //开一个协程 检测用户是否存在
	content := data.Content[24:]
	if strings.HasSuffix(content, "hello") { // 如果@机器人并输入 hello 则回复 你好。
		//api.PostMessage(ctx, data.ChannelID, &dto.MessageToCreate{MsgID: data.ID, Content: "你好"})

		//创建群消息回复对象
		dqAtReply := reply.NewReplyAtMessage(data.ChannelID, data.GuildID, data.ID, data.Author.ID)
		//创建私信消息回复对象
		dqDirectReply := reply.NewDirectReply(data.GuildID, data.Author.ID, data.ID)

		//1.回复普通文本
		dqAtReply.ReplyText("你好呀 at")
		dqDirectReply.ReplyText("你好呀 私信")

		//
		////2.回复ark23
		//ark23 := reply.NewTemplateArk23("描述", "ddd")
		//ark23.AddItem("hhhh", "")
		//ark23.AddItem("欢迎大家，感谢大家光临", "")
		//for i := 0; i < 10; i++ {
		//	ark23.AddItem("这是一项ark23消息-"+string(i), "")
		//}
		//dqReplyAt.ReplyArk23(ark23)
		//
		////3.回复ark24
		//ark24 := reply.NewTemplateArk24("ark24", "https://www.qiwei.site/dq/test24.png", "描述ark24", "")
		//dqReplyAt.ReplyArk24(ark24)
		//
		////3.回复ark34
		//ark34 := reply.NewTemplateArk34("ark34", "https://www.qiwei.site/dq/test24.png", "描述ark34", "")
		//dqReplyAt.ReplyArk34(ark34)
		//
		////3.回复ark37
		//ark37 := reply.NewTemplateArk37("ark37", "https://www.qiwei.site/dq/test24.png", "子标题", "")
		//dqReplyAt.ReplyArk37(ark37)

		//4.回复embed
		//embed := reply.NewTemplateEmbed("embed title", "https://www.qiwei.site/dq/test24.png")
		//embed.AddItems("第一条", "这是第二条", "这是第三条")
		//embed.AddItems("第4条")
		//dqReplyAt.ReplyEmbed(embed)

	}
	return nil
}

func messageSave(data *dto.WSATMessageData) {
	service := sermessage.NewMessageService()
	_, err := service.CreateMessage(sermessage.CreateParams{
		Content:   data.Content[24:],
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
func checkUser(data *dto.WSATMessageData) {
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
			QqID:     author.ID,
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
