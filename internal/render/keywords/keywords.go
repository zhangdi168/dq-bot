package keywords

import (
	"github.com/gin-gonic/gin"
	"github.com/zhangdi168/dq-bot/dqbot/pkg/formgen"
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"
	"go.uber.org/zap"
)

type handler struct {
	db     mysql.Repo
	logger *zap.Logger
	cache  redis.Repo
}

func New(logger *zap.Logger, db mysql.Repo, cache redis.Repo) *handler {
	return &handler{
		logger: logger,
		cache:  cache,
		db:     db,
	}
}

func (h *handler) List() core.HandlerFunc {
	return func(ctx core.Context) {
		radioList := make([]*formgen.RadioItem, 3)
		radioList[0] = &formgen.RadioItem{}

		ctx.HTML("list_keywords", gin.H{
			"text":     formgen.NewText("文本框", "name1").Value("默认值").Gen(),
			"textarea": formgen.NewTextarea("多行文本框", "name2").Value("默认值aaaa").Gen(),
			"radio": formgen.NewRadio("单选", "radioTest", []*formgen.RadioItem{
				{"选项1", "1"},
				{"选项2", "2"},
				{"选项3", "3"},
			}).Value("2").Gen(),
		})
	}
}
