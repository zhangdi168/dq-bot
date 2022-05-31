package redis

import (
	"fmt"

	"go.uber.org/zap"
)

//单例模式获取数据库实例
var dqCache *cacheRepo

func init() {
	dqCache1, err := conectRedis()
	if err != nil {
		fmt.Printf("new cache err", zap.Error(err))
	} else {
		dqCache = dqCache1
	}

}

// GetDb 获取单例对象的方法，引用传递返回
func GetCache() *cacheRepo {
	return dqCache
}

func conectRedis() (*cacheRepo, error) {
	client, err := redisConnect()
	if err != nil {
		return nil, err
	}

	return &cacheRepo{
		client: client,
	}, nil
}
