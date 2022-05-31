package mysql

import (
	"fmt"
	"github.com/zhangdi168/dq-bot/configs"
	"go.uber.org/zap"
	"gorm.io/gorm"
)

//单例模式获取数据库实例 饿汉式单例
var db *dbRepo //包 全局变量

//初始化数据库实例
func init() {
	db1, err := connectMysql()
	db = db1
	if err != nil {
		fmt.Printf("new db err", zap.Error(err))
	}
}

// GetInstance 获取数据库实例
func GetDb() *dbRepo {
	return db
}

//获取读库实例
func GetDbRead() *gorm.DB {
	return db.GetDbR()
}

// 获取写库实例
func GetDbWrite() *gorm.DB {
	return db.GetDbW()
}

//连接数据库
func connectMysql() (*dbRepo, error) {
	cfg := configs.Get().MySQL
	dbr, err := dbConnect(cfg.Read.User, cfg.Read.Pass, cfg.Read.Addr, cfg.Read.Name)
	if err != nil {
		return nil, err
	}

	dbw, err := dbConnect(cfg.Write.User, cfg.Write.Pass, cfg.Write.Addr, cfg.Write.Name)
	if err != nil {
		return nil, err
	}

	return &dbRepo{
		DbR: dbr,
		DbW: dbw,
	}, nil
}
