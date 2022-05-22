package authorized

import (
	"github.com/zhangdi168/dq-bot/configs"
	"github.com/zhangdi168/dq-bot/internal/pkg/core"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/authorized"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"

	"gorm.io/gorm"
)

func (s *service) UpdateUsed(ctx core.Context, id int32, used int32) (err error) {
	authorizedInfo, err := authorized.NewQueryBuilder().
		WhereIsDeleted(mysql.EqualPredicate, -1).
		WhereId(mysql.EqualPredicate, id).
		First(s.db.GetDbR().WithContext(ctx.RequestContext()))

	if err == gorm.ErrRecordNotFound {
		return nil
	}

	data := map[string]interface{}{
		"is_used":      used,
		"updated_user": ctx.SessionUserInfo().UserName,
	}

	qb := authorized.NewQueryBuilder()
	qb.WhereId(mysql.EqualPredicate, id)
	err = qb.Updates(s.db.GetDbW().WithContext(ctx.RequestContext()), data)
	if err != nil {
		return err
	}

	s.cache.Del(configs.RedisKeyPrefixSignature+authorizedInfo.BusinessKey, redis.WithTrace(ctx.Trace()))
	return
}
