package dq_user

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
)

type deleteAPIRequest struct{}

type deleteAPIResponse struct{}

// DeleteAPI 删除调用方接口地址
// @Summary 删除调用方接口地址
// @Description 删除调用方接口地址
// @Tags API.authorized
// @Accept application/x-www-form-urlencoded
// @Produce json
// @Param Request body deleteAPIRequest true "请求信息"
// @Success 200 {object} deleteAPIResponse
// @Failure 400 {object} code.Failure
// @Router /api/authorized_api/{id} [delete]
func (h *handler) DeleteAPI() core.HandlerFunc {
	return func(ctx core.Context) {

	}
}
