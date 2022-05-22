package cron

import (
	"github.com/zhangdi168/dq-bot/configs"
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	cronRepo "github.com/zhangdi168/dq-bot/internal/repository/cron"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"
	"github.com/zhangdi168/dq-bot/internal/services/cron"
	"github.com/zhangdi168/dq-bot/pkg/hash"

	"go.uber.org/zap"
)

var _ Handler = (*handler)(nil)

type Handler interface {
	i()

	// Create 创建任务
	// @Tags API.cron
	// @Router /api/cron [post]
	Create() core.HandlerFunc

	// Modify 编辑任务
	// @Tags API.cron
	// @Router /api/cron/{id} [post]
	Modify() core.HandlerFunc

	// List 任务列表
	// @Tags API.cron
	// @Router /api/cron [get]
	List() core.HandlerFunc

	// UpdateUsed 更新任务为启用/禁用
	// @Tags API.cron
	// @Router /api/cron/used [patch]
	UpdateUsed() core.HandlerFunc

	// Detail 获取单条任务详情
	// @Tags API.cron
	// @Router /api/cron/{id} [get]
	Detail() core.HandlerFunc

	// Execute 手动执行任务
	// @Tags API.cron
	// @Router /api/cron/{id} [patch]
	Execute() core.HandlerFunc
}

type handler struct {
	logger      *zap.Logger
	cache       redis.Repo
	hashids     hash.Hash
	cronService cron.Service
}

func New(logger *zap.Logger, db mysql.Repo, cache redis.Repo, cronServer cronRepo.Server) Handler {
	return &handler{
		logger:      logger,
		cache:       cache,
		hashids:     hash.New(configs.Get().HashIds.Secret, configs.Get().HashIds.Length),
		cronService: cron.New(db, cache, cronServer),
	}
}

func (h *handler) i() {}
