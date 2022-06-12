package mainbot

//本文件主要用于处理机器人消息

import (
	"github.com/tencent-connect/botgo/dto"
)

//atMessageEventHandler 处理 @机器人 的消息
func atMessageEventHandler(event *dto.WSPayload, data *dto.WSATMessageData) error {
	CoreHandler(event, (*dto.Message)(data))

	return nil
}
