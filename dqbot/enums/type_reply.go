package enums

import (
	"reflect"
	"strings"
)

//自动回复的消息类型
//首字母大写 会自动转换小写
type typeReply struct {
	Text  string //纯文本    text
	Embed string //embed
	Ark24 string //文字+图片 ark24 ark34
	Ark34 string //文字+图片 ark34
	Ark23 string //文字链接  ark23
	Ark37 string //大图片 ark37
}

func EnumsReply() *typeReply {
	temp1 := &typeReply{}
	var typeInfo = reflect.TypeOf(*temp1)
	var s = reflect.ValueOf(temp1).Elem()
	num := typeInfo.NumField()
	for i := 0; i < num; i++ {
		key := typeInfo.Field(i).Name
		s.Field(i).SetString(strings.ToLower(key)) // 内置常用类型的设值方法
	}
	return temp1
}
