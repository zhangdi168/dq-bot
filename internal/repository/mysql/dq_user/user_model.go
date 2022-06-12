package dq_user

import "time"

// DqUser 会员表
//go:generate gormgen -structs DqUser -input .
type DqUser struct {
	Id       int32     //
	Nickname string    // 昵称
	QqId     string    // qq的唯一ID
	Avatar   string    // 头像
	Credit1  int64     //积分1
	Credit2  int64     //积分2
	Credit3  int64     //积分3
	CreateAt time.Time `gorm:"time"` // 创建时间
	UpdateAt time.Time `gorm:"time"` // 修改时间
}
