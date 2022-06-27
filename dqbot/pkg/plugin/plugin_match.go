package plugin

import (
	"github.com/zhangdi168/dq-bot/dqbot/enums"
	"strings"
)

// Match 插件匹配，根据用户发送的的关键词进行插件匹配
//content:去掉前24位字符后的关键词
func Match(content string) (string, int, string) {
	//定于匹配到的插件名和对应关键词所在索引
	var pluginName string
	var touchFuncIndex int

	//完全匹配
	pluginName, touchFuncIndex = matchFull(content)
	if pluginName != "" {
		return pluginName, touchFuncIndex, enums.EnumsMatch().Full
	}

	//前缀匹配
	pluginName, touchFuncIndex = matchPre(content)
	if pluginName != "" {
		return pluginName, touchFuncIndex, enums.EnumsMatch().Pre
	}

	//后缀匹配
	pluginName, touchFuncIndex = matchSuf(content)
	if pluginName != "" {
		return pluginName, touchFuncIndex, enums.EnumsMatch().Suf
	}

	//包含匹配
	pluginName, touchFuncIndex = matchSuf(content)
	if pluginName != "" {
		return pluginName, touchFuncIndex, enums.EnumsMatch().In
	}

	return "", -1, ""
}

func matchFull(content string) (string, int) {
	for pluginName, plugin := range Plugins {
		if plugin.KeywordsTouch().FullWords == nil {
			continue
		}
		for i, match := range plugin.KeywordsTouch().FullWords {
			if match.Word == content {
				return pluginName, i
			}
		}
	}

	return "", -1
}

func matchPre(content string) (string, int) {
	for pluginName, plugin := range Plugins {
		words := plugin.KeywordsTouch().PreWords
		if words == nil {
			continue
		}
		for i, match := range words {
			isHas := strings.HasPrefix(content, match.Word)
			if isHas {
				return pluginName, i
			}
		}
	}

	return "", -1
}

//后缀匹配
func matchSuf(content string) (string, int) {
	for pluginName, plugin := range Plugins {
		words := plugin.KeywordsTouch().SufWords
		if words == nil {
			continue
		}
		for i, match := range words {
			if strings.HasSuffix(content, match.Word) {
				return pluginName, i
			}
		}
	}

	return "", -1
}

//包含匹配
func matchIn(content string) (string, int) {
	for pluginName, plugin := range Plugins {
		words := plugin.KeywordsTouch().InWords
		if words == nil {
			continue
		}
		for i, match := range words {
			if strings.Contains(content, match.Word) {
				return pluginName, i
			}
		}
	}

	return "", -1
}
