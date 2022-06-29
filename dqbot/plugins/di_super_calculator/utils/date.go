package utils

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
func ResolveTime(seconds int) (day int, hour int, minute int, second int) {
	second = ((seconds % 86400) % 3600) % 60
	//每分钟秒数
	minute = ((seconds % 86400) % 3600) / SecondsPerMinute
	//每小时秒数
	hour = (seconds % 86400) / SecondsPerHour
	//每天秒数
	day = seconds / SecondsPerDay
	return
}
