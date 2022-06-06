package reply

var _ IDqReply = (*DqReplyDirect)(nil)
var _ IDqReply = (*DqReplyAtMessage)(nil)

// IDqReply 回复消息接口
type IDqReply interface {
	ReplyText(content string)
	ReplyArk23(tempArk23 *DqTemplateArk23)
	ReplyArk24(tempArk24 *DqTemplateArk24)
	ReplyArk34(tempArk34 *DqTemplateArk34)
	ReplyArk37(tempArk37 *DqTemplateArk37)
}
