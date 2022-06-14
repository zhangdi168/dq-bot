package signin

import (
	"github.com/zhangdi168/dq-bot/dqbot/pkg/gosdk/dqchannel"
	"github.com/zhangdi168/dq-bot/dqbot/pkg/plugin"
)

func TouchFull1(DqApi plugin.PluginParams) {
	DqApi.ReplyDirect.Text("运行到了方法全匹配触发1,提取到核心词：" + DqApi.CoreContent)
}

func TouchFull2(DqApi plugin.PluginParams) {
	DqApi.ReplyDirect.Text("运行到了方法全匹配触发2,提取到核心词：" + DqApi.CoreContent)
}

func TouchIn1(DqApi plugin.PluginParams) {
	DqApi.ReplyDirect.Text("运行到了方法包含触发1,提取到核心词：" + DqApi.CoreContent)
}

func TouchIn2(DqApi plugin.PluginParams) {
	DqApi.ReplyDirect.Text("运行到了方法包含触发2,提取到核心词：" + DqApi.CoreContent)
}

func TouchPre1(DqApi plugin.PluginParams) {
	data, _ := dqchannel.GetGuildInfo(DqApi.GuilidAc)
	println(data)
	DqApi.ReplyDirect.Text("运行到了方法前缀触发1,提取到核心词：" + DqApi.CoreContent)
}

func TouchPre2(DqApi plugin.PluginParams) {
	DqApi.ReplyDirect.Text("运行到了方法前缀触发2,提取到核心词：" + DqApi.CoreContent)
}

func TouchSuf1(DqApi plugin.PluginParams) {
	DqApi.ReplyDirect.Text("运行到了方法后缀触发1,提取到核心词：" + DqApi.CoreContent)
}

func TouchSuf2(DqApi plugin.PluginParams) {
	DqApi.ReplyDirect.Text("运行到了方法后缀触发2,提取到核心词：" + DqApi.CoreContent)
}
