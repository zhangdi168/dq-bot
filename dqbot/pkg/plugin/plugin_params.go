package plugin

import (
	"github.com/tencent-connect/botgo/dto"
	"github.com/zhangdi168/dq-bot/dqbot/pkg/gosdk/reply"
)

// PluginParams 传给插件的参数
type PluginParams struct {
	Origin       *dto.Message //qq频道原始数据
	ReplyAt      reply.IDqReply
	ReplyDirect  reply.IDqReply //私信回复
	PluginNameEn string         //触发的插件英文名
	CoreContent  string         //核心词，全匹配就是全词；前缀匹配就去除前缀；后缀匹配就去除后缀；包含就是整个内容
	Keyword      string         //触发到的关键词
	GuilidAc     string         //有效的频道ID,私信就是srcGuildId,艾特就是GuildId
}
