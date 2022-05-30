package sermessage

var _ MessageService = (*messageService)(nil)

type CreateParams struct {
	Content   string `json:"content"`
	QqID      string `json:"QqID"`
	ChannelID string `json:"channel_id"`
	GuiId     string `json:"gui_id"`
	MessageID string `json:"message_id"`
}
type MessageService interface {
	CreateMessage(messageData CreateParams) (id int32, err error)
	//获取某个用户的最新n条消息
	GetLastMsg(qqid string, num int8) (*[]string, error)
}

func NewMessageService() MessageService {
	return messageService{}
}
