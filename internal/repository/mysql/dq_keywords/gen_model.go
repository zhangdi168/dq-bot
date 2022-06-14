package dq_keywords

import "time"

// DqKeywords 自动回复关键词表
//go:generate gormgen -structs DqKeywords -input .
type DqKeywords struct {
	Id        int32     //
	Word      string    // 关键词
	Sorted    int32     // 排序（越高越前面）
	MatchType string    // 匹配类型:all=全匹配,pre=前缀包含,suf=后缀包含,in=包含
	ReplyType string    // 回复消息类型:text=文本,embed=embed,link=链接文本,text_image=文本缩略图有,image=大图
	ReplyJson string    // 返回的json数据，match_type=material才有效
	Remark    string    // 关键词备注
	CreateAt  time.Time `gorm:"time"` // 创建时间
	UpdateAt  time.Time `gorm:"time"` // 修改时间
}
