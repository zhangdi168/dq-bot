package dq_message

import "time"

// DqMessage 自动回复关键词表
//go:generate gormgen -structs DqMessage -input .
type DqMessage struct {
	Id        int32     //
	Content   string    // 触发消息
	QqUserId  string    // qq的用户ID
	ChannelId string    // 频道Id
	GuildId   string    // 子频道Id
	MessageId string    // 消息ID
	CreateAt  time.Time `gorm:"time"` // 创建时间
	UpdateAt  time.Time `gorm:"time"` // 修改时间
}
