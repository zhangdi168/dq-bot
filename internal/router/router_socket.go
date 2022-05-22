package router

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/websocket/sysmessage"
)

func setSocketRouter(r *resource) {
	systemMessage := sysmessage.New(r.logger, r.db, r.cache)

	// 无需记录日志
	socket := r.mux.Group("/socket", core.DisableTraceLog, core.DisableRecordMetrics)
	{
		// 系统消息
		socket.GET("/system/message", systemMessage.Connect())
	}
}
