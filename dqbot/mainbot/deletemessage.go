package mainbot

import "github.com/tencent-connect/botgo/dto"

func messageDeleteEventHandler(payload *dto.WSPayload, data *dto.WSMessageDeleteData) error {
	println("messageDeleteEventHandler")
	return nil
}
