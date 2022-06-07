package reply

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk"
	"log"
)

// DqReplyDirect 私信消息回复
type DqReplyDirect struct {
	srcGuildID string
	AuthorID   string
	MsgID      string
	directMsg  *dto.DirectMessage
}

func (d *DqReplyDirect) ReplyEmbed(tempEmbed *DqTemplateEmbed) {
	//TODO implement me
	panic("implement me")
}

// NewDirectReply 初始化DqDirect对象和创建私信会话出书画
func NewDirectReply(srcGuildID string, AuthorID string, MsgID string) IDqReply {
	directMsg_, err := gosdk.Api.CreateDirectMessage(gosdk.Ctx, &dto.DirectMessageToCreate{
		SourceGuildID: srcGuildID,
		RecipientID:   AuthorID,
	})

	if err != nil {
		log.Fatalln("调用 CreateDirectMessage 接口失败, err = ", err)
	}
	return &DqReplyDirect{srcGuildID: srcGuildID, AuthorID: AuthorID, MsgID: MsgID, directMsg: directMsg_}
}

func (d *DqReplyDirect) ReplyText(content string) {
	_, err1 := gosdk.Api.PostDirectMessage(gosdk.Ctx, d.directMsg, &dto.MessageToCreate{
		Content: content,
		MsgID:   d.MsgID,
	})
	if err1 != nil {
		log.Fatalln("调用 PostDirectMessage 接口失败, err = ", err1)
	}
}

func (d *DqReplyDirect) ReplyArk23(tempArk23 *DqTemplateArk23) {
	arkData := tempArk23.GetFormatArk()
	gosdk.Api.PostDirectMessage(gosdk.Ctx, d.directMsg, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})
}

func (d *DqReplyDirect) ReplyArk24(tempArk24 *DqTemplateArk24) {
	arkData := tempArk24.GetFormatArk()
	gosdk.Api.PostDirectMessage(gosdk.Ctx, d.directMsg, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})
}

func (d *DqReplyDirect) ReplyArk34(tempArk34 *DqTemplateArk34) {
	arkData := tempArk34.GetFormatArk()
	gosdk.Api.PostDirectMessage(gosdk.Ctx, d.directMsg, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})

}

func (d *DqReplyDirect) ReplyArk37(tempArk37 *DqTemplateArk37) {
	arkData := tempArk37.GetFormatArk()
	gosdk.Api.PostDirectMessage(gosdk.Ctx, d.directMsg, &dto.MessageToCreate{MsgID: d.MsgID, Ark: arkData})

}
