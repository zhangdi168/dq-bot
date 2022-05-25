package dq_user

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
)

type deleteRequest struct{}

type deleteResponse struct{}

// Delete 删除调用方
// @Summary 删除调用方
// @Description 删除调用方
// @Tags API.authorized
// @Accept application/x-www-form-urlencoded
// @Produce json
// @Param Request body deleteRequest true "请求信息"
// @Success 200 {object} deleteResponse
// @Failure 400 {object} code.Failure
// @Router /api/authorized/{id} [delete]
func (h *handler) Delete() core.HandlerFunc {
	return func(ctx core.Context) {

	}
}
