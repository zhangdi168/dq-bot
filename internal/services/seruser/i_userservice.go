package seruser

import (
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/dq_user"
)

var _ UserService = (*userService)(nil)

//定义接口
type UserService interface {
	GetUserByQQId(qq_id string) (*dq_user.DqUser, error)
	GetUserById(user_id int32) (*dq_user.DqUser, error)
	GetUserByNick(nick string) (*dq_user.DqUser, error)
	CreateUser(userData CreateUserParams) (int32, error)
	ReadByCache(qqid string) (*dq_user.DqUser, error)
	WriteToCache(*dq_user.DqUser) error
}

type CreateUserParams struct {
	NickName string `json:"nick_name"`
	QQID     string `json:"qq_id"`
	Avatar   string `json:"avatar"`
}

func NewUserSer() UserService {
	return userService{}
}
