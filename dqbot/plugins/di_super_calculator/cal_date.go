package di_super_calculator

import (
	"github.com/zhangdi168/dq-bot/dqbot/pkg/plugin"
	"strings"
)

//倒计时
func calDjs(dqApi plugin.PluginParams) {
	content := strings.TrimSpace(dqApi.CoreContent)
	if content == "" {
		dqApi.ReplyAt.Text("请回复需要进行倒计时计算的日期,示例格式如下\n2025-06-29")
		return
	}

	dqApi.ReplyAt.Text("核心业务逻辑")

}
