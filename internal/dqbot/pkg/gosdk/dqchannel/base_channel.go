package dqchannel

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk"
	"log"
)

type DqChannel struct {
}

func GetGuildInfo(guildID string) (*dto.Guild, error) {
	guild, guildError := gosdk.Api.Guild(gosdk.Ctx, guildID)

	if guildError != nil {
		log.Print("调用 Guild 接口失败, err = ", guildError)
	}

	return guild, guildError
}
