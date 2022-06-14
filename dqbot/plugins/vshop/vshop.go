package vshop

import (
	plugin2 "github.com/zhangdi168/dq-bot/dqbot/pkg/plugin"
)

var _ plugin2.Plugin = (*vshop)(nil)

type vshop struct {
}

func (v vshop) Info() *plugin2.PluginInfo {
	return &plugin2.PluginInfo{
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

func (v vshop) KeywordsTouch() *plugin2.Keyword {
	//TODO implement me
	panic("implement me")
}
