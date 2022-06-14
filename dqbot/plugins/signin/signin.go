package signin

import (
	plugin2 "github.com/zhangdi168/dq-bot/dqbot/pkg/plugin"
)

type Signin struct {
}

func (m *Signin) Info() *plugin2.PluginInfo {
	return &plugin2.PluginInfo{
		NamaCn:    "每日签到",
		NamaEn:    "signin",
		Version:   "1.0",
		Author:    "zhangdi",
		Introduce: "测试插件",
	}
}

func (m *Signin) KeywordsTouch() *plugin2.Keyword {
	return &plugin2.Keyword{
		///完全匹配：优先级最高
		FullWords: []plugin2.WordInfo{
			{"上海天气", TouchFull1},
			{"苏州天气", TouchFull2},
		},
		//前缀匹配，优先级第二
		PreWords: []plugin2.WordInfo{
			{"查天气", TouchPre1},
			{"查询天气", TouchPre2},
			{"天气查询", func(DqApi plugin2.PluginParams) {

				DqApi.ReplyDirect.Text("私信回复前缀3")
			}},
		},
		//后缀匹配，优先级第三
		SufWords: []plugin2.WordInfo{
			{"的天气", TouchSuf1},
			{"的天气如何", TouchSuf2},
		},
		//包含即触发（优先级最低）
		InWords: []plugin2.WordInfo{
			{"天气", TouchIn1},
			{"空气", TouchIn2},
		},
	}
}

func (m *Signin) Setup(config map[string]string) error {
	println("这里是配置项")
	return nil
}

func init() {
	plugin2.Register(&Signin{})
}
