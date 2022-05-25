package dq_user

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
)

type listRequest struct{}

type listResponse struct{}

// List 调用方列表
// @Summary 调用方列表
// @Description 调用方列表
// @Tags API.authorized
// @Accept application/x-www-form-urlencoded
// @Produce json
// @Param Request body listRequest true "请求信息"
// @Success 200 {object} listResponse
// @Failure 400 {object} code.Failure
// @Router /api/authorized [get]
func (h *handler) List() core.HandlerFunc {
	return func(ctx core.Context) {

	}
}
