package enums

import (
	"reflect"
	"strings"
)

//消息匹配类型
type typeMatch struct {
	All string //全匹配
	Pre string //前缀
	Suf string //后缀
	In  string //包含
}

//通过反射获取
func EnumsMatch() *typeMatch {
	temp1 := &typeMatch{}
	var typeInfo = reflect.TypeOf(*temp1)
	var s = reflect.ValueOf(temp1).Elem()
	num := typeInfo.NumField()
	for i := 0; i < num; i++ {
		key := typeInfo.Field(i).Name
		s.Field(i).SetString(strings.ToLower(key)) // 内置常用类型的设值方法
	}
	return temp1
}
