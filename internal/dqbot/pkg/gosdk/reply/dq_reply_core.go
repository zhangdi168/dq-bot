package reply

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk"
	"log"
)

type DqReplyCore struct {
	//以下两个参数艾特消息用到
	channnelID string //频道ID
	GuildID    string //子频道ID

	//以下两个私信消息用到
	MsgId    string //消息ID
	AuthorID string //用户ID

	directMsg *dto.DirectMessage //私信会话，可以根据这个是否为空判断是是私信还是艾特
}

// NewReplyCore 创建实例对象，如果是私信GuildID传入的是data.SrcGuildID，at传入的的是 data.SGuildID；
//私信只能回复私信，艾特私信+群聊两者都能恢复
func NewReplyCore(channelID string, GuildID string, MsgId string, AuthorID string) *DqReplyCore {
	directMsg_, err := gosdk.Api.CreateDirectMessage(gosdk.Ctx, &dto.DirectMessageToCreate{
		SourceGuildID: GuildID,
		RecipientID:   AuthorID,
	})
	if err != nil {
		log.Fatalln("调用 CreateDirectMessage 接口失败, err = ", err)
	}

	return &DqReplyCore{
		channnelID: channelID,
		GuildID:    GuildID,
		MsgId:      MsgId,
		AuthorID:   AuthorID,
		directMsg:  directMsg_,
	}
}

// IsDirectMessage 是否为私信消息
func (d DqReplyCore) IsDirectMessage() bool {
	if d.directMsg == nil {
		return true
	} else {
		return false
	}
}

func (d DqReplyCore) TextAt(content string) {
	gosdk.Api.PostMessage(gosdk.Ctx, d.channnelID, &dto.MessageToCreate{MsgID: d.MsgId, Content: content})
}

func (d DqReplyCore) TextDirect(content string) {
	_, err1 := gosdk.Api.PostDirectMessage(gosdk.Ctx, d.directMsg, &dto.MessageToCreate{
		Content: content,
		MsgID:   d.MsgId,
	})
	if err1 != nil {
		log.Fatalln("调用 PostDirectMessage 接口失败, err = ", err1)
	}
}

func (d DqReplyCore) Ark23At(tempArk23 *DqTemplateArk23) {

}

func (d DqReplyCore) Ark23Direct(tempArk23 *DqTemplateArk23) {

}

func (d DqReplyCore) ReplyArk24(tempArk24 *DqTemplateArk24) {
	//TODO implement me
	panic("implement me")
}

func (d DqReplyCore) ReplyArk34(tempArk34 *DqTemplateArk34) {
	//TODO implement me
	panic("implement me")
}

func (d DqReplyCore) ReplyArk37(tempArk37 *DqTemplateArk37) {
	//TODO implement me
	panic("implement me")
}

func (d DqReplyCore) ReplyEmbed(tempEmbed *DqTemplateEmbed) {
	//TODO implement me
	panic("implement me")
}
