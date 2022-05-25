package dq_user

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
)

type listAPIRequest struct{}

type listAPIResponse struct{}

// ListAPI 调用方接口地址列表
// @Summary 调用方接口地址列表
// @Description 调用方接口地址列表
// @Tags API.authorized
// @Accept application/x-www-form-urlencoded
// @Produce json
// @Param Request body listAPIRequest true "请求信息"
// @Success 200 {object} listAPIResponse
// @Failure 400 {object} code.Failure
// @Router /api/authorized_api [get]
func (h *handler) ListAPI() core.HandlerFunc {
	return func(ctx core.Context) {

	}
}
