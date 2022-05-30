package mainbot

//本文件主要用于处理机器人消息

import (
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
		api.PostMessage(ctx, data.ChannelID, &dto.MessageToCreate{MsgID: data.ID, Content: "你好"})
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
	//list, _ := service.GetLastMsg(data.Author.ID, 100)

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
