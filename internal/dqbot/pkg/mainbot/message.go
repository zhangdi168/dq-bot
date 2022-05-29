package mainbot

//本文件主要用于处理机器人消息

import (
	"encoding/json"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/dq_message"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/dq_user"
	"github.com/zhangdi168/dq-bot/internal/repository/redis"
	"strings"
	"time"

	"github.com/tencent-connect/botgo/dto"
)

//atMessageEventHandler 处理 @机器人 的消息
func atMessageEventHandler(event *dto.WSPayload, data *dto.WSATMessageData) error {
	go messageSave(data) //开一个协程保存消息
	go checkUser(data)   //开一个协程 检测用户是否存在
	content := data.Content[24:]
	if strings.HasSuffix(content, "hello") { // 如果@机器人并输入 hello 则回复 你好。
		api.PostMessage(ctx, data.ChannelID, &dto.MessageToCreate{MsgID: data.ID, Content: "你好"})
	}

	return nil
}

func messageSave(data *dto.WSATMessageData) {
	//创建数据库模型
	model := dq_message.NewModel()
	//结构体赋值
	model.MessageId = data.ID
	model.Content = data.Content[24:] //原格式：“<@!3447550723496396889> 你好呀”  需要把前面的多余的截取掉
	model.ChannelId = data.ChannelID
	model.GuildId = data.GuildID
	model.QqUserId = data.Author.ID
	model.CreateAt = time.Now()
	model.UpdateAt = time.Now()
	//保存到数据库
	model.Create(mysql.GetDb().GetDbW())
	err := redis.GetCache().Set("msg", model.Content, 0)
	data1, _ := redis.GetCache().Get("msg")
	println(data1)
	if err != nil {
		return
	}
}

// 根据qqid检测用户是否存在，不存在则入库
// 查询流程：redis-db 这两个存在一个就会直接返回
// 都不存在数据就插入数据到数据库
func checkUser(data *dto.WSATMessageData) {
	member := data.Member
	author := data.Author
	userInfoPre := "user_info:"
	v, err := redis.GetCache().Get(userInfoPre + author.ID)
	if v != "" {
		//缓存中存在数据
		println(userInfoPre + author.ID + "缓存中存在该用户:" + author.Username)
		return
	}

	builder := dq_user.NewQueryBuilder()
	builder.WhereQqId(mysql.EqualPredicate, author.ID)
	info, err := builder.First(mysql.GetDb().GetDbR())
	if info == nil {
		if err != nil {
			println(err)
		}
		model := dq_user.NewModel()
		model.Nickname = member.Nick
		model.QqId = author.ID
		model.Avatar = author.ID
		model.CreateAt = time.Now()
		model.UpdateAt = time.Now()
		model.Create(mysql.GetDb().GetDbW())

	}

	//写入缓存
	jsonInfo, _ := json.Marshal(info)
	cacheKey := userInfoPre + author.ID
	redis.GetCache().Set(cacheKey, string(jsonInfo), 0)
}
