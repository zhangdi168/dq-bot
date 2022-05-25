package dq_user

import "time"

// DqUser 会员表
//go:generate gormgen -structs DqUser -input .
type DqUser struct {
	Id       int32     //
	Nickname string    // 昵称
	QqId     int32     // qq的唯一ID
	CreateAt time.Time `gorm:"time"` // 创建时间
	UpdateAt time.Time `gorm:"time"` // 修改时间
}
