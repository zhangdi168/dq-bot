package mainbot

//本文件主要用于处理机器人消息

import (
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/dq_message"
	"strings"
	"time"

	"github.com/tencent-connect/botgo/dto"
)

//atMessageEventHandler 处理 @机器人 的消息
func atMessageEventHandler(event *dto.WSPayload, data *dto.WSATMessageData) error {
	go message_save(data) //开一个协程保存消息
	content := data.Content[24:]
	if strings.HasSuffix(content, "hello") { // 如果@机器人并输入 hello 则回复 你好。
		api.PostMessage(ctx, data.ChannelID, &dto.MessageToCreate{MsgID: data.ID, Content: "你好"})
	}

	return nil
}

func message_save(data *dto.WSATMessageData) {
	//创建数据库模型
	model := dq_message.NewModel()
	//结构体赋值
	model.MessageId = data.ID
	model.Content = data.Content[24:] //原格式：“<@!3447550723496396889> 你好呀”  需要把前面的多余的截取掉
	model.ChannelId = data.ChannelID
	model.GuildId = data.GuildID
	model.QqUserId = data.Author.ID
	model.CreateAt = time.Now()
	model.UpdateAt = time.Now()
	//保存到数据库
	model.Create(server.Db.GetDbW())
}
