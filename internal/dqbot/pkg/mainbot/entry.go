package mainbot

import (
	"context"
	"github.com/tencent-connect/botgo"
	"github.com/tencent-connect/botgo/event"
	"github.com/tencent-connect/botgo/openapi"
	"github.com/tencent-connect/botgo/token"
	"github.com/tencent-connect/botgo/websocket"
	"github.com/zhangdi168/dq-bot/configs"
	"github.com/zhangdi168/dq-bot/internal/router"
	"os"
	"time"
)

var api openapi.OpenAPI
var ctx context.Context
var server *router.Server

//消息处理入口：初始化token等信息
func EntryInit(s *router.Server) {
	server = s
	config_appid := configs.Get().Bot.Appid
	config_token := configs.Get().Bot.Token
	//第二步：生成token，用于校验机器人的身份信息
	token := token.BotToken(config_appid, config_token)

	//第三步：获取操作机器人的API对象
	api = botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
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

	botgo.NewSessionManager().Start(ws, token, &intent) // 启动socket监听
}
