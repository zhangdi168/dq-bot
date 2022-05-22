package cron

import (
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/cron_task"
)

func (s *service) Execute(ctx core.Context, id int32) (err error) {
	qb := cron_task.NewQueryBuilder()
	qb.WhereId(mysql.EqualPredicate, id)
	info, err := qb.QueryOne(s.db.GetDbR().WithContext(ctx.RequestContext()))
	if err != nil {
		return err
	}

	info.Spec = "手动执行"
	go s.cronServer.AddJob(info)()

	return nil
}
