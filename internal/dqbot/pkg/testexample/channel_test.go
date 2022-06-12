package testexample

import (
	"github.com/zhangdi168/dq-bot/internal/dqbot/pkg/gosdk/dqchannel"
	"testing"
)

func TestGetGuild(t *testing.T) {
	dqchannel.GetGuildInfo("111")
	t.Logf("1")
}
