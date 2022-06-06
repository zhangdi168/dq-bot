package reply

import "github.com/tencent-connect/botgo/dto"

type DqTemplateArk37 struct {
	prompt       string `remark:"提示文本"`
	metatitle    string `remark:"标题"`
	metasubtitle string `remark:"子标题"`
	metacover    string `remark:"大图"`
	metaurl      string `remark:"跳转链接"`
}

func NewTemplateArk37(title string, img string, subtitle string, link string) *DqTemplateArk37 {
	return &DqTemplateArk37{
		prompt:       title,
		metatitle:    title,
		metasubtitle: subtitle,
		metacover:    img,
		metaurl:      link,
	}
}

func (t37 DqTemplateArk37) GetFormatArk() *dto.Ark {
	akvArray := make([]*dto.ArkKV, 7)

	akvArray[0] = createArk37Item("#PROMPT#", t37.prompt)
	akvArray[1] = createArk37Item("#METATITLE#", t37.metatitle)
	akvArray[2] = createArk37Item("#METASUBTITLE#", t37.metasubtitle)
	akvArray[3] = createArk37Item("#METACOVER#", t37.metacover)
	akvArray[4] = createArk37Item("#METAURL#", t37.metaurl)
	return &dto.Ark{
		TemplateID: 37,
		KV:         akvArray,
	}
}

func (t37 *DqTemplateArk37) SetPrompt(prompt string) {
	t37.prompt = prompt
}

func createArk37Item(k string, v string) *dto.ArkKV {
	return &dto.ArkKV{
		Key:   k,
		Value: v,
	}
}
