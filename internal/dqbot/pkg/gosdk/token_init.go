package gosdk

import (
	"context"
	"github.com/tencent-connect/botgo"
	"github.com/tencent-connect/botgo/openapi"
	"github.com/tencent-connect/botgo/token"
	"github.com/zhangdi168/dq-bot/configs"
	"time"
)

var api openapi.OpenAPI
var ctx context.Context
var botToken *token.Token

//初始化sdk的token相关对象
func init() {
	configAppid := configs.Get().Bot.Appid
	configToken := configs.Get().Bot.Token
	//第二步：生成token，用于校验机器人的身份信息
	botToken = token.BotToken(configAppid, configToken)

	//第三步：获取操作机器人的API对象
	api = botgo.NewOpenAPI(botToken).WithTimeout(3 * time.Second)
	//获取context
	ctx = context.Background()
}

func GetToken() *token.Token {
	return botToken
}

func GetContext() context.Context {
	return ctx
}

func GetApi() openapi.OpenAPI {
	return api
}
