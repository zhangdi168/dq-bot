package mainbot

import (
	"context"
	"os"
	"time"

	"github.com/zhangdi168/dq-bot/configs"

	"github.com/tencent-connect/botgo"
	"github.com/tencent-connect/botgo/event"
	"github.com/tencent-connect/botgo/openapi"
	"github.com/tencent-connect/botgo/token"
	"github.com/tencent-connect/botgo/websocket"
)

var api openapi.OpenAPI
var ctx context.Context

// EntryInit 消息处理入口：初始化token等信息
func EntryInit() {
	configAppid := configs.Get().Bot.Appid
	configToken := configs.Get().Bot.Token
	//第二步：生成token，用于校验机器人的身份信息
	botToken := token.BotToken(configAppid, configToken)

	//第三步：获取操作机器人的API对象
	api = botgo.NewOpenAPI(botToken).WithTimeout(3 * time.Second)
	//获取context
	ctx = context.Background()
	//第四步：获取websocket
	ws, err := api.WS(ctx, nil, "")
	if err != nil {
		println("websocket错误， err = ", err)
		os.Exit(1)
	}

	var atMessage event.ATMessageEventHandler = atMessageEventHandler

	intent := websocket.RegisterHandlers(atMessage) // 注册socket消息处理

	botgo.NewSessionManager().Start(ws, botToken, &intent) // 启动socket监听
}
