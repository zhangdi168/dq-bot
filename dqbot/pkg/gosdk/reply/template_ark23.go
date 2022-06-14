package reply

import "github.com/tencent-connect/botgo/dto"

type DqTemplateArk23 struct {
	desc    string
	prompt  string
	List    []*dto.ArkObj
	ItemNum int
}

func NewTemplateArk23(desc string, prompt string) *DqTemplateArk23 {
	return &DqTemplateArk23{
		desc:    desc,
		prompt:  prompt,
		List:    []*dto.ArkObj{},
		ItemNum: 0,
	}

}

// GetFormatArk 获取并组装要发送的数据
func (t DqTemplateArk23) GetFormatArk() *dto.Ark {

	akvArray := make([]*dto.ArkKV, 3)
	akvArray[0] = &dto.ArkKV{
		Key:   "#DESC#",
		Value: "描述",
	}
	akvArray[1] = &dto.ArkKV{
		Key:   "#PROMPT#",
		Value: "#PROMPT#",
	}
	akvArray[2] = &dto.ArkKV{
		Key: "#LIST#",
		Obj: t.List,
	}

	return &dto.Ark{
		TemplateID: 23,
		KV:         akvArray,
	}

}

//添加一个内容项目
func (t *DqTemplateArk23) AddItem(desc string, link string) {

	t.List = append(t.List, createKvItem(desc, link))
	t.ItemNum = len(t.List)
}

func createKvItem(desc string, link string) *dto.ArkObj {
	//创建一个ark23键值对切片对象
	return &dto.ArkObj{
		[]*dto.ArkObjKV{
			{
				"desc",
				desc,
			},
			{
				"link",
				link,
			},
		},
	}

}
