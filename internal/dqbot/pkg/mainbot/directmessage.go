package mainbot

import "github.com/tencent-connect/botgo/dto"

//私信事件
func directMessageEventHandler(payload *dto.WSPayload, data *dto.WSDirectMessageData) error {
	println("私信事件")
	api.PostMessage(ctx, data.ChannelID, &dto.MessageToCreate{MsgID: data.ID, Content: "私信事件"})
	return nil
}
