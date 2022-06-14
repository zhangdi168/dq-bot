package plugin

type Depend interface {
	DependOn() []string
}

var setupStatus map[string]bool

// 获取所有注册插件
func loadPlugins() (plugin chan Plugin, setupStatus map[string]bool) {
	// 这里定义一个长度为10的队列
	var sortPlugin = make(chan Plugin, 10)
	//var setupStatus = make[string]bool

	// 所有的插件
	for name, plugin := range Plugins {
		sortPlugin <- plugin
		setupStatus[name] = false
	}

	return sortPlugin, setupStatus
}

// SetupPlugins 加载（初始化）所有插件
func SetupPlugins(pluginChan chan Plugin, setupStatus map[string]bool) error {
	num := len(pluginChan)
	for num > 0 {
		plugin := <-pluginChan
		canSetup := true
		if deps, ok := plugin.(Depend); ok {
			depends := deps.DependOn()
			for _, dependName := range depends {
				if _, _ = setupStatus[dependName]; !canSetup {
					// 有未加载的插件
					canSetup = false
					break
				}
			}
		}

		// 如果这个插件能被setup
		if canSetup {
			//配置载入
			plugin.Setup(map[string]string{})
			setupStatus[plugin.Info().NamaEn] = true
		} else {
			// 如果插件不能被setup, 这个plugin就塞入到最后一个队列
			pluginChan <- plugin
		}
	}
	return nil
}
