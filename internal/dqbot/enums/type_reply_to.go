package enums

import (
	"reflect"
	"strings"
)

//自动回复的消息类型
//首字母大写 会自动转换小写
type typeReplyTo struct {
	At     string //回复艾特消息
	Direct string //回复私信
}

func EnumsReplyTo() *typeReplyTo {
	temp1 := &typeReplyTo{}
	var typeInfo = reflect.TypeOf(*temp1)
	var s = reflect.ValueOf(temp1).Elem()
	num := typeInfo.NumField()
	for i := 0; i < num; i++ {
		key := typeInfo.Field(i).Name
		s.Field(i).SetString(strings.ToLower(key)) // 内置常用类型的设值方法
	}
	return temp1
}
