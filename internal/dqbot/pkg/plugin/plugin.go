package plugin

type Plugin interface {
	Info() *PluginInfo
	Setup(config map[string]string) error
	KeywordsTouch() *Keyword //前缀触发
}

var Plugins map[string]Plugin

// Register 这个register就是实现了将第三方plugin放到plugins全局变量中
func Register(plugin Plugin) {

	if Plugins == nil {
		Plugins = make(map[string]Plugin, 1)
	}
	pluginName := plugin.Info().NamaEn
	println("注册插件：" + pluginName + "[" + plugin.Info().NamaCn + "]")
	Plugins[pluginName] = plugin
}
