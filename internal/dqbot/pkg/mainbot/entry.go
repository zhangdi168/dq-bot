package mainbot

import (
	"context"
	"github.com/tencent-connect/botgo"
	"github.com/tencent-connect/botgo/event"
	"github.com/tencent-connect/botgo/openapi"
	"github.com/tencent-connect/botgo/token"
	"github.com/tencent-connect/botgo/websocket"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk"
	"os"
)

var api openapi.OpenAPI
var ctx context.Context
var botToken *token.Token

// EntryInit 消息处理入口：初始化token等信息
func EntryInit() {
	api = gosdk.GetApi()
	ctx = gosdk.GetContext()
	botToken = gosdk.GetToken()

	ws, err := api.WS(ctx, nil, "")
	if err != nil {
		println("websocket错误， err = ", err)
		os.Exit(1)
	}

	var atMessage event.ATMessageEventHandler = atMessageEventHandler             //艾特事件监听
	var directMessage event.DirectMessageEventHandler = directMessageEventHandler //私信事件处理
	var deleteMessage event.MessageDeleteEventHandler = messageDeleteEventHandler
	intent := websocket.RegisterHandlers(atMessage, directMessage, deleteMessage) // 注册socket消息处理

	botgo.NewSessionManager().Start(ws, botToken, &intent) // 启动socket监听
}
