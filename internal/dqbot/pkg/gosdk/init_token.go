package gosdk

import (
	"context"
	"github.com/tencent-connect/botgo"
	"github.com/tencent-connect/botgo/openapi"
	"github.com/tencent-connect/botgo/token"
	"github.com/zhangdi168/dq-bot/configs"
	"time"
)

var Api openapi.OpenAPI
var Ctx context.Context
var botToken *token.Token

//初始化sdk的token相关对象
func init() {
	configAppid := configs.Get().Bot.Appid
	configToken := configs.Get().Bot.Token
	//第二步：生成token，用于校验机器人的身份信息
	botToken = token.BotToken(configAppid, configToken)

	//第三步：获取操作机器人的API对象
	Api = botgo.NewOpenAPI(botToken).WithTimeout(3 * time.Second)
	//获取context
	Ctx = context.Background()
}

func GetToken() *token.Token {
	return botToken
}

func GetContext() context.Context {
	return Ctx
}

func GetApi() openapi.OpenAPI {
	return Api
}
