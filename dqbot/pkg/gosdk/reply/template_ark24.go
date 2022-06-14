package reply

import "github.com/tencent-connect/botgo/dto"

type DqTemplateArk24 struct {
	title    string `remark:"标题"`
	img      string `remark:"图片链接"`
	link     string `remark:"跳转链接"`
	subtitle string `remark:"子标题"`
	desc     string `remark:"描述"`
	metadesc string `remark:"详情描述"`
	prompt   string `remark:"提示文本"`
}

func NewTemplateArk24(title string, img string, metadesc string, link string) *DqTemplateArk24 {
	return &DqTemplateArk24{
		title:    title,
		img:      img,
		link:     link,
		subtitle: "",
		metadesc: metadesc,
		desc:     metadesc,
		prompt:   metadesc,
	}
}

func (t24 DqTemplateArk24) GetFormatArk() *dto.Ark {
	akvArray := make([]*dto.ArkKV, 7)
	akvArray[0] = createArk24Item("#DESC#", t24.desc)
	akvArray[1] = createArk24Item("#PROMPT#", t24.prompt)
	akvArray[2] = createArk24Item("#TITLE#", t24.title)
	akvArray[3] = createArk24Item("#METADESC#", t24.metadesc)
	akvArray[4] = createArk24Item("#IMG#", t24.img)
	akvArray[5] = createArk24Item("#LINK#", t24.link)
	akvArray[6] = createArk24Item("#SUBTITLE#", t24.subtitle)
	return &dto.Ark{
		TemplateID: 24,
		KV:         akvArray,
	}
}

func (t24 *DqTemplateArk24) SetLink(link string) {
	t24.link = link
}

func (t24 *DqTemplateArk24) SetDesc(desc string) {
	t24.desc = desc
}

func (t24 *DqTemplateArk24) SetPrompt(prompt string) {
	t24.prompt = prompt
}

func (t24 *DqTemplateArk24) SetSubTitle(subtitle string) {
	t24.subtitle = subtitle
}

func createArk24Item(k string, v string) *dto.ArkKV {
	return &dto.ArkKV{
		Key:   k,
		Value: v,
	}
}
