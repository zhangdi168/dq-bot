package mainbot

//本文件主要用于处理机器人消息

import (
	"github.com/tencent-connect/botgo/dto"
	"strings"
)

//atMessageEventHandler 处理 @机器人 的消息
func atMessageEventHandler(event *dto.WSPayload, data *dto.WSATMessageData) error {

	if strings.HasSuffix(data.Content, "> hello") { // 如果@机器人并输入 hello 则回复 你好。
		api.PostMessage(ctx, data.ChannelID, &dto.MessageToCreate{MsgID: data.ID, Content: "你好"})
	}

	return nil
}
