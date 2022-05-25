package dq_user

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
)

type createRequest struct{}

type createResponse struct{}

// Create 新增调用方
// @Summary 新增调用方
// @Description 新增调用方
// @Tags API.authorized
// @Accept application/x-www-form-urlencoded
// @Produce json
// @Param Request body createRequest true "请求信息"
// @Success 200 {object} createResponse
// @Failure 400 {object} code.Failure
// @Router /api/authorized [post]
func (h *handler) Create() core.HandlerFunc {
	return func(ctx core.Context) {

	}
}
