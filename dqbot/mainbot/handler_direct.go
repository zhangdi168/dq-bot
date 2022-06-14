package mainbot

import (
	"github.com/tencent-connect/botgo/dto"
)

//私信事件
func directMessageEventHandler(payload *dto.WSPayload, data *dto.WSDirectMessageData) error {
	//println("私信事件")
	//dqDirect := reply.NewDirectReply(data)
	//dqDirect.Text("哈哈哈哈")
	//dqDirect.Text("第二条回复")
	//dqDirect.Text("第3条回复")

	//回复ark23
	//ark23 := gosdk.NewTemplateArk23("test", "hhh")
	//ark23.AddItem("无连接", "")
	//ark23.AddItem("大家好", "https://www.qiwei.site/dq/")
	//ark23.AddItem("无连接", "")
	//dqDirect.Ark23(ark23)

	//ark24 := reply.NewTemplateArk24("test image", "https://www.qiwei.site/dq/test24.png", "这里是描述", "")
	//ark24.SetSubTitle("子标题呀") //设置子标题
	//dqDirect.Ark24(ark24)

	//ark34 := reply.NewTemplateArk34("test image", "https://www.qiwei.site/dq/test24.png", "这里是描述", "")
	//dqDirect.Ark34(ark34)
	//
	//ark37 := reply.NewTemplateArk37("test image", "https://www.qiwei.site/dq/test24.png", "子标题", "")
	//dqDirect.Ark37(ark37)

	////创建艾特消息回复对象
	//dqReply := reply.NewReplyCore(data.ChannelID, data.SrcGuildID, data.ID, data.Author.ID)
	//
	////1.回复普通文本
	//dqReply.TextAt("你好呀 at")
	//dqReply.TextDirect("你好呀 私信")

	CoreHandler(payload, (*dto.Message)(data))

	return nil
}
