package testexample

import (
	"github.com/zhangdi168/dq-bot/dqbot/pkg/gosdk/dqchannel"
	"testing"
)

func TestGetGuild(t *testing.T) {
	dqchannel.GetGuildInfo("111")
	t.Logf("1")
}
