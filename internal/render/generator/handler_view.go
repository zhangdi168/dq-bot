package generator_handler

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
)

func (h *handler) HandlerView() core.HandlerFunc {
	return func(c core.Context) {
		c.HTML("generator_handler", nil)
	}
}
