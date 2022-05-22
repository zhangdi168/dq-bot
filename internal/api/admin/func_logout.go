package admin

import (
	"net/http"

	"github.com/zhangdi168/dq-bot/configs"
	"github.com/zhangdi168/dq-bot/internal/code"
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"
	"github.com/zhangdi168/dq-bot/pkg/errors"
)

type logoutResponse struct {
	Username string `json:"username"` // 用户账号
}

// Logout 管理员登出
// @Summary 管理员登出
// @Description 管理员登出
// @Tags API.admin
// @Accept application/x-www-form-urlencoded
// @Produce json
// @Success 200 {object} logoutResponse
// @Failure 400 {object} code.Failure
// @Router /api/admin/logout [post]
// @Security LoginToken
func (h *handler) Logout() core.HandlerFunc {
	return func(c core.Context) {
		res := new(logoutResponse)
		res.Username = c.SessionUserInfo().UserName

		if !h.cache.Del(configs.RedisKeyPrefixLoginUser+c.GetHeader(configs.HeaderLoginToken), redis.WithTrace(c.Trace())) {
			c.AbortWithError(core.Error(
				http.StatusBadRequest,
				code.AdminLogOutError,
				code.Text(code.AdminLogOutError)).WithError(errors.New("cache del err")),
			)
			return
		}

		c.Payload(res)
	}
}
