package reply

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk"
)

// DqReplyGroup 群聊@消息回复
type DqReplyAtMessage struct {
	data *dto.WSATMessageData
}

// NewDirect 初始化DqDirect对象和创建私信会话出书画
func NewReplyAtMessage(data_ *dto.WSATMessageData) IDqReply {
	return &DqReplyAtMessage{data: data_}
}

func (d *DqReplyAtMessage) ReplyText(content string) {
	gosdk.Api.PostMessage(gosdk.Ctx, d.data.ChannelID, &dto.MessageToCreate{MsgID: d.data.ID, Content: content})
}

func (d *DqReplyAtMessage) ReplyArk23(tempArk23 *DqTemplateArk23) {
	arkData := tempArk23.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.data.ChannelID, &dto.MessageToCreate{MsgID: d.data.ID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}

func (d *DqReplyAtMessage) ReplyArk24(tempArk24 *DqTemplateArk24) {
	arkData := tempArk24.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.data.ChannelID, &dto.MessageToCreate{MsgID: d.data.ID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}

func (d *DqReplyAtMessage) ReplyArk34(tempArk34 *DqTemplateArk34) {
	arkData := tempArk34.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.data.ChannelID, &dto.MessageToCreate{MsgID: d.data.ID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}

func (d *DqReplyAtMessage) ReplyArk37(tempArk37 *DqTemplateArk37) {
	arkData := tempArk37.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.data.ChannelID, &dto.MessageToCreate{MsgID: d.data.ID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}
