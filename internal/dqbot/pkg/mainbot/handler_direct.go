package mainbot

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk/reply"
)

//私信事件
func directMessageEventHandler(payload *dto.WSPayload, data *dto.WSDirectMessageData) error {
	println("私信事件")
	dqDirect := reply.NewDirect(data)
	//dqDirect.ReplyText("哈哈哈哈")
	//dqDirect.ReplyText("第二条回复")
	//dqDirect.ReplyText("第3条回复")

	//回复ark23
	//ark23 := gosdk.NewTemplateArk23("test", "hhh")
	//ark23.AddItem("无连接", "")
	//ark23.AddItem("大家好", "https://www.qiwei.site/dq/")
	//ark23.AddItem("无连接", "")
	//dqDirect.ReplyArk23(ark23)

	//ark24 := reply.NewTemplateArk24("test image", "https://www.qiwei.site/dq/test24.png", "这里是描述", "")
	//ark24.SetSubTitle("子标题呀") //设置子标题
	//dqDirect.ReplyArk24(ark24)

	ark34 := reply.NewTemplateArk34("test image", "https://www.qiwei.site/dq/test24.png", "这里是描述", "")
	dqDirect.ReplyArk34(ark34)

	ark37 := reply.NewTemplateArk37("test image", "https://www.qiwei.site/dq/test24.png", "子标题", "")
	dqDirect.ReplyArk37(ark37)
	return nil
}
