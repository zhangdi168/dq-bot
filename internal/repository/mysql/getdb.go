package mysql

import (
	"fmt"
	"go.uber.org/zap"
)

//单例模式获取数据库实例
var dqDB *dbRepo

// GetDb 获取单例对象的方法，引用传递返回
func GetDb() Repo {
	if dqDB == nil {
		dqDB, err := New()
		if err != nil {
			fmt.Printf("new db err", zap.Error(err))
		}
		return dqDB
	}
	return dqDB
}
