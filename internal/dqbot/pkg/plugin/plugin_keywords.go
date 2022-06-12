package plugin

type FuncKeywordTouch func(params PluginParams)

type Keyword struct {
	FullWords []WordInfo
	PreWords  []WordInfo //前缀匹配
	SufWords  []WordInfo //后缀匹配
	InWords   []WordInfo //包含匹配
}

// WordInfo 关键词以及触发方法
type WordInfo struct {
	Word      string           //关键词
	TouchFunc FuncKeywordTouch //触发方法
}
