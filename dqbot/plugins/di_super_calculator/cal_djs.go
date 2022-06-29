package di_super_calculator

import (
	"fmt"
	"github.com/zhangdi168/dq-bot/dqbot/pkg/plugin"
	"github.com/zhangdi168/dq-bot/dqbot/plugins/di_super_calculator/utils"
	"regexp"
	"strings"
	"time"
)

//倒计时
//格式： 18点、 18:00 、 20日 、 7月4日
func calDjs(dqApi plugin.PluginParams) {
	content := strings.TrimSpace(dqApi.CoreContent)
	exampleDjs :=
		`请按以下日期格式艾特本机器人：
⭐18点（默认今日18点）
⭐18点52分 （默认今日）
⭐17日    （默认本月17日）
⭐7月4日（默认今年7月4日）
⭐2025-06-29
⭐2025-07-04 13:14:52
`
	if content == "" {
		dqApi.ReplyAt.Text(exampleDjs)
		return
	}
	content = strings.ReplaceAll(content, "：", ":")
	reply := computeDjs(content)
	if reply == "" {
		dqApi.ReplyAt.Text(exampleDjs)
	} else {
		dqApi.ReplyAt.Text(reply)
	}

	return
}

//根据某个时间获取倒计时
func getSubTime(t1 time.Time) string {

	now := time.Now()
	nowUnix := now.Unix()
	dateUnix := t1.Unix()
	if dateUnix < 0 {
		return ""
	}
	if int(dateUnix-nowUnix) < 0 {
		//时间已经过了
		return fmt.Sprint("时间总在悄然流逝", t1.Format("2006-1-2 15:04:05"), "已经过去了\n但人生是一场没有退路的旅程,要活在当下，着眼未来，加油！")
	}
	days, hours, mins, secs := utils.ResolveTime(int(dateUnix - nowUnix))

	return fmt.Sprint("📅距离", t1.Format("2006-1-2 15:04:05"), "\n\n⏰还有: ", days, "天", hours, "小时", mins, "分", secs, "秒")
}

func computeDjs(content string) string {
	now := time.Now()
	year := now.Year()
	month := int(now.Month())
	day := now.Day()
	hour := now.Hour()
	min := now.Minute()
	sec := "0"
	var t1 time.Time

	//⭐18点（默认今日18点）
	//⭐18点52分 （默认今日）
	tempHour, tempMin := parseHour(content)
	if tempHour != "" {
		//%02v %02d表示不足两位前面补0
		dateStr := fmt.Sprintf("%v-%02v-%02v %02v:%02v:%02v", year, month, day, tempHour, tempMin, sec)
		t1, _ = time.ParseInLocation("2006-01-02 15:04:05", dateStr, time.Local)
		return getSubTime(t1)
	}

	//⭐17日    （默认本月17日）
	//⭐7月4日（默认今年7月4日）
	tempMonth, tempDay := parseDay(content)
	if tempMonth != "" {
		//%02v %02d表示不足两位前面补0
		dateStr := fmt.Sprintf("%v-%02v-%02v %02v:%02v:%02v", year, tempMonth, tempDay, hour, min, sec)
		t1, _ = time.ParseInLocation("2006-01-02 15:04:05", dateStr, time.Local)
		return getSubTime(t1)
	}

	//⭐2025-06-29
	//⭐2025-07-04 13:14:52
	if strings.Contains(content, "-") {
		if strings.Contains(content, ":") {
			t1, _ = time.ParseInLocation("2006-01-02 15:04:05", content, time.Local)
		} else {
			t1, _ = time.ParseInLocation("2006-01-02 15:04:05", content+" 00:00:00", time.Local)
		}
		return getSubTime(t1)
	}

	return ""
}

func parseHour(content string) (string, string) {
	rex := regexp.MustCompile(`(\d+)点(\d*)分?`)
	out := rex.FindAllStringSubmatch(content, -1)
	if len(out) > 0 {
		words := out[0]
		hour := ""
		min := ""
		if words[1] != "" {
			hour = words[1]
		} else {
			return "", ""
		}
		if words[2] != "" {
			min = words[2]
		} else {
			min = "0"

		}
		return hour, min
	}
	return "", ""
}
func parseDay(content string) (string, string) {
	rex := regexp.MustCompile(`(\d+)月(\d*)日?`)
	out := rex.FindAllStringSubmatch(content, -1)
	if len(out) > 0 {
		words := out[0]
		month := ""
		day := ""
		if words[1] != "" {
			month = words[1]
		} else {
			return "", ""
		}
		if words[2] != "" {
			day = words[2]
		} else {
			day = "1"
		}
		return month, day
	}
	return "", ""
}
