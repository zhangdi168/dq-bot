package redis

import (
	"fmt"

	"go.uber.org/zap"
)

//单例模式获取数据库实例
var dqCache *cacheRepo

// GetDb 获取单例对象的方法，引用传递返回
func GetCache() Repo {
	if dqCache == nil {
		dqCache, err := New()
		if err != nil {
			fmt.Printf("new db err", zap.Error(err))
		}
		return dqCache
	}
	return dqCache
}
