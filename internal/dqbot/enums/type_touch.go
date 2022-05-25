package enums

import (
	"reflect"
	"strings"
)

//资源来源类型：插件、素材
//自动回复的消息类型
//首字母大写 会自动转换小写
type typeTouch struct {
	Text       string //纯文本
	Embed      string //embed
	Text_image string //文字+图片
	Link       string //文字链接
	Image      string //大图片
}

func EnumsTouch() *typeTouch {
	temp1 := &typeTouch{}
	var typeInfo = reflect.TypeOf(*temp1)
	var s = reflect.ValueOf(temp1).Elem()
	num := typeInfo.NumField()
	for i := 0; i < num; i++ {
		key := typeInfo.Field(i).Name
		s.Field(i).SetString(strings.ToLower(key)) // 内置常用类型的设值方法
	}
	return temp1
}
