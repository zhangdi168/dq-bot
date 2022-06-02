package gosdk

import (
	"github.com/tencent-connect/botgo/dto"
	"log"
)

type DqDirect struct {
	data      *dto.WSDirectMessageData
	directMsg *dto.DirectMessage
}

// NewDirect 初始化DqDirect对象和创建私信会话出书画
func NewDirect(data_ *dto.WSDirectMessageData) *DqDirect {

	directMsg_, err := api.CreateDirectMessage(ctx, &dto.DirectMessageToCreate{
		SourceGuildID: data_.SrcGuildID,
		RecipientID:   data_.Author.ID,
	})

	if err != nil {
		log.Fatalln("调用 CreateDirectMessage 接口失败, err = ", err)
	}
	return &DqDirect{data: data_, directMsg: directMsg_}
}

func (d DqDirect) ReplyText(content string) {
	_, err1 := api.PostDirectMessage(ctx, d.directMsg, &dto.MessageToCreate{
		Content: content,
		MsgID:   d.data.ID,
	})
	if err1 != nil {
		log.Fatalln("调用 PostDirectMessage 接口失败, err = ", err1)
	}
}
