package lang

import (
	"reflect"
)

type keywords struct {
	Id        string `cn:"id" en:"id"`
	Word      string `cn:"关键词" en:"word"`
	Sorted    string `cn:"排序" en:"sorted"`
	MatchType string `cn:"匹配类型" en:"match_type"`
	ReplyType string `cn:"回复类型" en:"reply_type"`
	ReplyJson string `cn:"回复内容" en:"reply_json"`
	PluginId  string `cn:"插件ID" en:"plugin_id"`
	CreateAt  string `cn:"创建时间" en:"create_at"`
	UpdateAt  string `cn:"修改时间" en:"update_at"`
}

var KeywordsCn *keywords = &keywords{} //中文语言包
var KeywordsEn *keywords = &keywords{} //英文语言包

func init() {

	var typeInfo = reflect.TypeOf(*KeywordsCn)
	var valueInfoCn = reflect.ValueOf(KeywordsCn).Elem()
	var valueInfoEn = reflect.ValueOf(KeywordsEn).Elem()
	fieldNum := typeInfo.NumField()

	for i := 0; i < fieldNum; i++ {
		//key := typeInfo.Field(i).Name
		tagCn := typeInfo.Field(i).Tag.Get("cn")
		tagEn := typeInfo.Field(i).Tag.Get("en")
		valueInfoCn.Field(i).SetString(tagCn) // 内置常用类型的设值方法
		valueInfoEn.Field(i).SetString(tagEn) // 内置常用类型的设值方法

	}

}
