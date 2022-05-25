package dq_user

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
)

type createAPIRequest struct{}

type createAPIResponse struct{}

// CreateAPI 授权调用方接口地址
// @Summary 授权调用方接口地址
// @Description 授权调用方接口地址
// @Tags API.authorized
// @Accept application/x-www-form-urlencoded
// @Produce json
// @Param Request body createAPIRequest true "请求信息"
// @Success 200 {object} createAPIResponse
// @Failure 400 {object} code.Failure
// @Router /api/authorized_api [post]
func (h *handler) CreateAPI() core.HandlerFunc {
	return func(ctx core.Context) {

	}
}
