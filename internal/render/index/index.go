package index

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"

	"go.uber.org/zap"
)

type handler struct {
	logger *zap.Logger
	cache  redis.Repo
	db     mysql.Repo
}

func New(logger *zap.Logger, db mysql.Repo, cache redis.Repo) *handler {
	return &handler{
		logger: logger,
		cache:  cache,
		db:     db,
	}
}

func (h *handler) Index() core.HandlerFunc {
	return func(ctx core.Context) {
		ctx.HTML("index", nil)
	}
}
