package sermessage

import (
	"github.com/zhangdi168/dq-bot/internal/repository/mysql"
	"github.com/zhangdi168/dq-bot/internal/repository/mysql/dq_message"
	"time"
)

type messageService struct {
}

func (m messageService) GetLastMsg(qqid string, num int8) (*[]string, error) {
	builder := dq_message.NewQueryBuilder()
	builder.WhereQqUserId(mysql.EqualPredicate, qqid)
	builder.OrderByCreateAt(false)
	builder.Limit(int(num))
	res, err := builder.QueryAll(mysql.GetDb().GetDbR())
	if err != nil {
		return nil, err
	} else {
		list := make([]string, num)
		for i, re := range res {
			list[i] = re.Content
		}
		return &list, err
	}

}

func (m messageService) CreateMessage(messageData CreateParams) (id int32, err error) {
	//创建数据库模型
	model := dq_message.NewModel()
	//结构体赋值
	model.MessageId = messageData.MessageID
	model.Content = messageData.Content //原格式：“<@!3447550723496396889> 你好呀”  需要把前面的多余的截取掉
	model.ChannelId = messageData.ChannelID
	model.GuildId = messageData.GuiId
	model.QqUserId = messageData.QqID
	model.CreateAt = time.Now()
	model.UpdateAt = time.Now()
	//保存到数据库
	return model.Create(mysql.GetDb().GetDbW())
}
