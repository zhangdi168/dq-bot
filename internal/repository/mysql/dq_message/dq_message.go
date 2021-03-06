///////////////////////////////////////////////////////////
// THIS FILE IS AUTO GENERATED by gormgen, DON'T EDIT IT //
//        ANY CHANGES DONE HERE WILL BE LOST             //
///////////////////////////////////////////////////////////

package dq_message

import (
	"fmt"
	"time"

	"github.com/zhangdi168/dq-bot/internal/repository/mysql"

	"github.com/pkg/errors"
	"gorm.io/gorm"
)

func NewModel() *DqMessage {
	return new(DqMessage)
}

func NewQueryBuilder() *dqMessageQueryBuilder {
	return new(dqMessageQueryBuilder)
}

func (t *DqMessage) Create(db *gorm.DB) (id int32, err error) {
	if err = db.Create(t).Error; err != nil {
		return 0, errors.Wrap(err, "create err")
	}
	return t.Id, nil
}

type dqMessageQueryBuilder struct {
	order []string
	where []struct {
		prefix string
		value  interface{}
	}
	limit  int
	offset int
}

func (qb *dqMessageQueryBuilder) buildQuery(db *gorm.DB) *gorm.DB {
	ret := db
	for _, where := range qb.where {
		ret = ret.Where(where.prefix, where.value)
	}
	for _, order := range qb.order {
		ret = ret.Order(order)
	}
	ret = ret.Limit(qb.limit).Offset(qb.offset)
	return ret
}

func (qb *dqMessageQueryBuilder) Updates(db *gorm.DB, m map[string]interface{}) (err error) {
	db = db.Model(&DqMessage{})

	for _, where := range qb.where {
		db.Where(where.prefix, where.value)
	}

	if err = db.Updates(m).Error; err != nil {
		return errors.Wrap(err, "updates err")
	}
	return nil
}

func (qb *dqMessageQueryBuilder) Delete(db *gorm.DB) (err error) {
	for _, where := range qb.where {
		db = db.Where(where.prefix, where.value)
	}

	if err = db.Delete(&DqMessage{}).Error; err != nil {
		return errors.Wrap(err, "delete err")
	}
	return nil
}

func (qb *dqMessageQueryBuilder) Count(db *gorm.DB) (int64, error) {
	var c int64
	res := qb.buildQuery(db).Model(&DqMessage{}).Count(&c)
	if res.Error != nil && res.Error == gorm.ErrRecordNotFound {
		c = 0
	}
	return c, res.Error
}

func (qb *dqMessageQueryBuilder) First(db *gorm.DB) (*DqMessage, error) {
	ret := &DqMessage{}
	res := qb.buildQuery(db).First(ret)
	if res.Error != nil && res.Error == gorm.ErrRecordNotFound {
		ret = nil
	}
	return ret, res.Error
}

func (qb *dqMessageQueryBuilder) QueryOne(db *gorm.DB) (*DqMessage, error) {
	qb.limit = 1
	ret, err := qb.QueryAll(db)
	if len(ret) > 0 {
		return ret[0], err
	}
	return nil, err
}

func (qb *dqMessageQueryBuilder) QueryAll(db *gorm.DB) ([]*DqMessage, error) {
	var ret []*DqMessage
	err := qb.buildQuery(db).Find(&ret).Error
	return ret, err
}

func (qb *dqMessageQueryBuilder) Limit(limit int) *dqMessageQueryBuilder {
	qb.limit = limit
	return qb
}

func (qb *dqMessageQueryBuilder) Offset(offset int) *dqMessageQueryBuilder {
	qb.offset = offset
	return qb
}

func (qb *dqMessageQueryBuilder) WhereId(p mysql.Predicate, value int32) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "id", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereIdIn(value []int32) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "id", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereIdNotIn(value []int32) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "id", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderById(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "id "+order)
	return qb
}

func (qb *dqMessageQueryBuilder) WhereMessage(p mysql.Predicate, value string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "message", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereMessageIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "message", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereMessageNotIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "message", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderByMessage(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "message "+order)
	return qb
}

func (qb *dqMessageQueryBuilder) WhereQqUserId(p mysql.Predicate, value string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "qq_user_id", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereQqUserIdIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "qq_user_id", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereQqUserIdNotIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "qq_user_id", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderByQqUserId(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "qq_user_id "+order)
	return qb
}

func (qb *dqMessageQueryBuilder) WhereChannelId(p mysql.Predicate, value string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "channel_id", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereChannelIdIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "channel_id", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereChannelIdNotIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "channel_id", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderByChannelId(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "channel_id "+order)
	return qb
}

func (qb *dqMessageQueryBuilder) WhereGuildId(p mysql.Predicate, value string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "guild_id", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereGuildIdIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "guild_id", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereGuildIdNotIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "guild_id", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderByGuildId(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "guild_id "+order)
	return qb
}

func (qb *dqMessageQueryBuilder) WhereMessageId(p mysql.Predicate, value string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "message_id", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereMessageIdIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "message_id", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereMessageIdNotIn(value []string) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "message_id", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderByMessageId(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "message_id "+order)
	return qb
}

func (qb *dqMessageQueryBuilder) WhereCreateAt(p mysql.Predicate, value time.Time) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "create_at", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereCreateAtIn(value []time.Time) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "create_at", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereCreateAtNotIn(value []time.Time) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "create_at", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderByCreateAt(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "create_at "+order)
	return qb
}

func (qb *dqMessageQueryBuilder) WhereUpdateAt(p mysql.Predicate, value time.Time) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "update_at", p),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereUpdateAtIn(value []time.Time) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "update_at", "IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) WhereUpdateAtNotIn(value []time.Time) *dqMessageQueryBuilder {
	qb.where = append(qb.where, struct {
		prefix string
		value  interface{}
	}{
		fmt.Sprintf("%v %v ?", "update_at", "NOT IN"),
		value,
	})
	return qb
}

func (qb *dqMessageQueryBuilder) OrderByUpdateAt(asc bool) *dqMessageQueryBuilder {
	order := "DESC"
	if asc {
		order = "ASC"
	}

	qb.order = append(qb.order, "update_at "+order)
	return qb
}
