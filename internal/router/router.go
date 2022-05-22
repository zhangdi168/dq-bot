package router

import (
	"github.com/zhangdi168/dq-bot/configs"
	"github.com/zhangdi168/dq-bot/internal/alert"
	"github.com/zhangdi168/dq-bot/internal/metrics"
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/repository/cron"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"
	"github.com/zhangdi168/dq-bot/internal/router/interceptor"
	"github.com/zhangdi168/dq-bot/pkg/errors"
	"github.com/zhangdi168/dq-bot/pkg/file"

	"go.uber.org/zap"
)

type resource struct {
	mux          core.Mux
	logger       *zap.Logger
	db           mysql.Repo
	cache        redis.Repo
	interceptors interceptor.Interceptor
	cronServer   cron.Server
}

type Server struct {
	Mux        core.Mux
	Db         mysql.Repo
	Cache      redis.Repo
	CronServer cron.Server
}

func NewHTTPServer(logger *zap.Logger, cronLogger *zap.Logger) (*Server, error) {
	if logger == nil {
		return nil, errors.New("logger required")
	}

	r := new(resource)
	r.logger = logger

	openBrowserUri := configs.ProjectDomain + configs.ProjectPort

	_, ok := file.IsExists(configs.ProjectInstallMark)
	if !ok { // 未安装
		openBrowserUri += "/install"
	} else { // 已安装

		// 初始化 DB
		dbRepo, err := mysql.New()
		if err != nil {
			logger.Fatal("new db err", zap.Error(err))
		}
		r.db = dbRepo

		// 初始化 Cache
		cacheRepo, err := redis.New()
		if err != nil {
			logger.Fatal("new cache err", zap.Error(err))
		}
		r.cache = cacheRepo

		// 初始化 CRON Server
		cronServer, err := cron.New(cronLogger, dbRepo, cacheRepo)
		if err != nil {
			logger.Fatal("new cron err", zap.Error(err))
		}
		cronServer.Start()
		r.cronServer = cronServer
	}

	mux, err := core.New(logger,
		core.WithEnableOpenBrowser(openBrowserUri),
		core.WithEnableCors(),
		core.WithEnableRate(),
		core.WithAlertNotify(alert.NotifyHandler(logger)),
		core.WithRecordMetrics(metrics.RecordHandler(logger)),
	)

	if err != nil {
		panic(err)
	}

	r.mux = mux
	r.interceptors = interceptor.New(logger, r.cache, r.db)

	// 设置 Render 路由
	setRenderRouter(r)

	// 设置 API 路由
	setApiRouter(r)

	// 设置 GraphQL 路由
	setGraphQLRouter(r)

	// 设置 Socket 路由
	setSocketRouter(r)

	s := new(Server)
	s.Mux = mux
	s.Db = r.db
	s.Cache = r.cache
	s.CronServer = r.cronServer

	return s, nil
}
