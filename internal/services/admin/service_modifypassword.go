package admin

import (
	"github.com/zhangdi168/dq-bot/configs"
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/pkg/password"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/admin"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"
)

func (s *service) ModifyPassword(ctx core.Context, id int32, newPassword string) (err error) {
	data := map[string]interface{}{
		"password":     password.GeneratePassword(newPassword),
		"updated_user": ctx.SessionUserInfo().UserName,
	}

	qb := admin.NewQueryBuilder()
	qb.WhereId(mysql.EqualPredicate, id)
	err = qb.Updates(s.db.GetDbW().WithContext(ctx.RequestContext()), data)
	if err != nil {
		return err
	}

	s.cache.Del(configs.RedisKeyPrefixLoginUser+password.GenerateLoginToken(id), redis.WithTrace(ctx.Trace()))
	return
}
