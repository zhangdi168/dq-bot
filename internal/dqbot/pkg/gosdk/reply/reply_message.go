package reply

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk"
)

// DqReplyAtMessage DqReplyGroup 群聊@消息回复
type DqReplyAtMessage struct {
	ChannelID string
	GuildID   string
	Authorid  string
	MsgID     string
}

// NewReplyAtMessage NewDirectReply 初始化DqDirect对象和创建私信会话出书画
func NewReplyAtMessage(ChannelID string, GuildID string, MsgID string, AuthorID string) IDqReply {
	return &DqReplyAtMessage{
		ChannelID: ChannelID,
		GuildID:   GuildID,
		Authorid:  AuthorID,
		MsgID:     MsgID,
	}
}

func (d *DqReplyAtMessage) Text(content string) {
	gosdk.Api.PostMessage(gosdk.Ctx, d.ChannelID, &dto.MessageToCreate{MsgID: d.MsgID, Content: content})
}

func (d *DqReplyAtMessage) Ark23(tempArk23 *DqTemplateArk23) {
	arkData := tempArk23.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.ChannelID, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}

func (d *DqReplyAtMessage) Ark24(tempArk24 *DqTemplateArk24) {
	arkData := tempArk24.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.ChannelID, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}

func (d *DqReplyAtMessage) Ark34(tempArk34 *DqTemplateArk34) {
	arkData := tempArk34.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.ChannelID, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}

func (d *DqReplyAtMessage) Ark37(tempArk37 *DqTemplateArk37) {
	arkData := tempArk37.GetFormatArk()
	message, err := gosdk.Api.PostMessage(gosdk.Ctx, d.ChannelID, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})
	if err != nil {
		println(err, message)
		return
	}
}

func (d *DqReplyAtMessage) Embed(tempEmbed *DqTemplateEmbed) {
	arkData := tempEmbed.GetFormatEmbed()
	gosdk.Api.PostMessage(gosdk.Ctx, d.ChannelID, &dto.MessageToCreate{MsgID: d.MsgID, Embed: arkData})
}
