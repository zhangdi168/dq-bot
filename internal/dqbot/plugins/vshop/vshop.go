package vshop

import "github.com/zhangdi168/dq-bot/internal/dqbot/pkg/plugin"

var _ plugin.Plugin = (*vshop)(nil)

type vshop struct {
}

func (v vshop) Info() *plugin.PluginInfo {
	return &plugin.PluginInfo{
		NamaCn:    "",
		NamaEn:    "",
		Version:   "",
		Author:    "",
		Introduce: "",
	}
}

func (v vshop) Setup(config map[string]string) error {
	//TODO implement me
	panic("implement me")
}

func (v vshop) KeywordsTouch() *plugin.Keyword {
	//TODO implement me
	panic("implement me")
}
