package mainbot

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk"
)

//私信事件
func directMessageEventHandler(payload *dto.WSPayload, data *dto.WSDirectMessageData) error {
	println("私信事件")
	dqDirect := gosdk.NewDirect(data)
	dqDirect.ReplyText("哈哈哈哈")
	dqDirect.ReplyText("第二条回复")
	dqDirect.ReplyText("第3条回复")
	return nil
}
