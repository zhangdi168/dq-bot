package di_super_calculator

import (
	"fmt"
	"testing"
	"time"
)

/*
时间常量
*/
const (

	//定义每分钟的秒数
	SecondsPerMinute = 60
	//定义每小时的秒数
	SecondsPerHour = SecondsPerMinute * 60
	//定义每天的秒数
	SecondsPerDay = SecondsPerHour * 24
)

// 将秒转换成具体的天数、时、分钟数
func resolveTime(seconds int) (day int, hour int, minute int, second int) {
	second = ((seconds % 86400) % 3600) % 60
	//每分钟秒数
	minute = ((seconds % 86400) % 3600) / SecondsPerMinute
	//每小时秒数
	hour = (seconds % 86400) / SecondsPerHour
	//每天秒数
	day = seconds / SecondsPerDay
	return
}

func TestTimes(t *testing.T) {
	str := "2022-06-28 18:00:00"
	t1, _ := time.ParseInLocation("2006-01-02 15:04:05", str, time.Local)

	now := time.Now()

	now_unix := now.Unix()
	date_unix := t1.Unix()
	fmt.Println(resolveTime(int(date_unix - now_unix)))

	t.Logf("%v \n %v  \n %v\n %v", t1, now, now_unix-date_unix, date_unix-now_unix)
}
