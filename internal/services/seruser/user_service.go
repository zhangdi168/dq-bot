package seruser

import (
	"encoding/json"
	"time"

	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/dq_user"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"
)

var cacheUserPre string = "userinfo:"

type userService struct {
}

func (u userService) ReadByCache(qqid string) (*dq_user.DqUser, error) {
	res, err := redis.GetCache().Get(cacheUserPre + qqid)
	if err != nil {
		return nil, err
	}

	user := &dq_user.DqUser{}
	err1 := json.Unmarshal([]byte(res), user)
	if err1 != nil {
		return nil, err1
	}

	return user, err1
}

func (u userService) WriteToCache(user *dq_user.DqUser) error {
	jsonInfo, _ := json.Marshal(user)
	cacheKey := cacheUserPre + user.QqId
	return redis.GetCache().Set(cacheKey, string(jsonInfo), 0)
}

func (u userService) GetUserByQQId(qq_id string) (*dq_user.DqUser, error) {
	builder := dq_user.NewQueryBuilder()
	builder.WhereQqId(mysql.EqualPredicate, qq_id)
	return builder.First(mysql.GetDb().GetDbR())
}

func (u userService) GetUserById(user_id int32) (*dq_user.DqUser, error) {
	builder := dq_user.NewQueryBuilder()
	builder.WhereId(mysql.EqualPredicate, user_id)
	return builder.First(mysql.GetDb().GetDbR())
}

func (u userService) GetUserByNick(nick string) (*dq_user.DqUser, error) {
	builder := dq_user.NewQueryBuilder()
	builder.WhereNickname(mysql.EqualPredicate, nick)
	return builder.First(mysql.GetDb().GetDbR())
}

func (u userService) CreateUser(userData CreateUserParams) (int32, error) {
	model := dq_user.NewModel()
	model.Nickname = userData.NickName
	model.QqId = userData.QqID
	model.Avatar = userData.Avatar
	model.CreateAt = time.Now()
	model.UpdateAt = time.Now()
	return model.Create(mysql.GetDb().GetDbW())
}
