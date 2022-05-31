package main

import (
	"fmt"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
)

type tabel_infor struct {
	Field   string //字段名 id
	Type    string //类型 varchar(100)
	Null    string //是否为空行：YES
	Key     string //
	Default string //默认值：
	Extra   string
	Comment string //注释:姓名
}

func main() {

	db := mysql.GetDbRead()
	var Pricerecord []tabel_infor
	db.Raw("show full columns from  dq_keywords").Scan(&Pricerecord)
	for i, v := range Pricerecord {
		fmt.Println(i, v)
	}

	//println(lang.KeywordsCn.Remark)
}
