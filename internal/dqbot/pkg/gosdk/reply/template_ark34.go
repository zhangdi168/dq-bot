package reply

import "github.com/tencent-connect/botgo/dto"

type DqTemplateArk34 struct {
	metatitle   string `remark:"标题"`
	metapreview string `remark:"大图"`
	metaurl     string `remark:"跳转链接"`
	metadesc    string `remark:"描述"`
	metaicon    string `remark:"小图标"`
	desc        string `remark:"详情描述"`
	prompt      string `remark:"提示文本"`
}

func NewTemplateArk34(title string, img string, metadesc string, link string) *DqTemplateArk34 {
	return &DqTemplateArk34{
		metatitle:   title,
		metapreview: img,
		metaurl:     link,
		metaicon:    img,
		metadesc:    metadesc,
		desc:        metadesc,
		prompt:      metadesc,
	}
}

func (t34 DqTemplateArk34) GetFormatArk() *dto.Ark {
	akvArray := make([]*dto.ArkKV, 7)
	akvArray[0] = createArk34Item("#DESC#", t34.desc)
	akvArray[1] = createArk34Item("#PROMPT#", t34.prompt)
	akvArray[2] = createArk34Item("#METATITLE#", t34.metatitle)
	akvArray[3] = createArk34Item("#METADESC#", t34.metadesc)
	akvArray[4] = createArk34Item("#METAICON#", t34.metaicon)
	akvArray[5] = createArk34Item("#METAPREVIEW#", t34.metapreview)
	akvArray[6] = createArk34Item("#METAURL#", t34.metaurl)
	return &dto.Ark{
		TemplateID: 34,
		KV:         akvArray,
	}
}

func (t34 *DqTemplateArk34) SetLink(link string) {
	t34.metaurl = link
}

func (t34 *DqTemplateArk34) SetDesc(desc string) {
	t34.desc = desc
}

func (t34 *DqTemplateArk34) SetPrompt(prompt string) {
	t34.prompt = prompt
}

func (t34 *DqTemplateArk34) SetIcon(iconUrl string) {
	t34.metaicon = iconUrl
}

func createArk34Item(k string, v string) *dto.ArkKV {
	return &dto.ArkKV{
		Key:   k,
		Value: v,
	}
}
