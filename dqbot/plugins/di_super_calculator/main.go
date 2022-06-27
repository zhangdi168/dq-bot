package di_super_calculator

import (
	plugin2 "github.com/zhangdi168/dq-bot/dqbot/pkg/plugin"
)

type SuperCalculator struct {
}

func (m *SuperCalculator) Info() *plugin2.PluginInfo {
	return &plugin2.PluginInfo{
		NamaCn:    "超级计算器",
		NamaEn:    "super_calculator",
		Version:   "1.0",
		Author:    "zhangdi",
		Introduce: "超级计算器",
	}
}

func (m *SuperCalculator) KeywordsTouch() *plugin2.Keyword {
	return &plugin2.Keyword{
		///完全匹配：优先级最高
		FullWords: []plugin2.WordInfo{},
		//前缀匹配，优先级第二
		PreWords: []plugin2.WordInfo{
			{"倒计时", calDjs},
		},
		//后缀匹配，优先级第三
		SufWords: []plugin2.WordInfo{},
		//包含即触发（优先级最低）
		InWords: []plugin2.WordInfo{},
	}
}

func (m *SuperCalculator) Setup(config map[string]string) error {
	println("这里是配置项")
	return nil
}

func init() {
	plugin2.Register(&SuperCalculator{})
}
