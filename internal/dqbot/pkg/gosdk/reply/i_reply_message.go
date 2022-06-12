package reply

var _ IDqReply = (*DqReplyDirect)(nil)
var _ IDqReply = (*DqReplyAtMessage)(nil)

// IDqReply 回复消息接口
type IDqReply interface {
	Text(content string)
	Ark23(tempArk23 *DqTemplateArk23)
	Ark24(tempArk24 *DqTemplateArk24)
	Ark34(tempArk34 *DqTemplateArk34)
	Ark37(tempArk37 *DqTemplateArk37)
	Embed(tempEmbed *DqTemplateEmbed)
}
