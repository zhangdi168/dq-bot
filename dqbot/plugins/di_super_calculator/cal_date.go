package di_super_calculator

import (
	"github.com/zhangdi168/dq-bot/dqbot/pkg/plugin"
	"regexp"
	"strings"
)

//倒计时
//格式： 18点、 18:00 、 20日 、 7月4日
func calDjs(dqApi plugin.PluginParams) {
	content := strings.TrimSpace(dqApi.CoreContent)
	exampleDjs :=
		`请回复需要进行倒计时计算的日期,示例格式如下：
2025-06-29
2025-07-04 13:14:52
18点（默认今日18点）
18点52分 （默认今日）
17日    （默认本月17日）
7月4日（默认今年7月4日）
`
	if content == "" {
		dqApi.ReplyAt.Text(exampleDjs)
		return
	}
	content = strings.ReplaceAll(content, "：", ":")
	//按点倒计时 18点52分 18点
	rex := regexp.MustCompile(`([0-9]+)点([0-9]*)分?`)
	out := rex.FindAllStringSubmatch(content, -1)
	if len(out) > 0 {
		//words := out[0]
		//now := time.Now()
		//hour := string(now.Hour())
		//min := string(now.Minute())
		//
		//if words[1] != "" {
		//	hour = words[1]
		//}
		//if words[2] != "" {
		//	min = words[2]
		//}
		//	date_str := fmt.Printf("%v ", now.Year(), now.Month(), now.Day(), hour, min, now.Second())

	}
	for _, i := range out {
		//botid :=i[1] //机器人ID  <@!3447550723496396889>中的3447550723496396889
		content = strings.ReplaceAll(content, i[0], "") //将 <@!3447550723496396889> 删除掉
	}

	dqApi.ReplyAt.Text("核心业务逻辑")

}
