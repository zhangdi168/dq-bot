package reply

import "github.com/tencent-connect/botgo/dto"

type DqTemplateEmbed struct {
	title string   `remark:"标题"`
	img   string   `remark:"图片"`
	items []string `remark:"列表项"`
}

func NewTemplateEmbed(title string, imgUrl string) *DqTemplateEmbed {
	return &DqTemplateEmbed{
		title: title,
		img:   imgUrl,
		items: []string{},
	}
}

func (embed *DqTemplateEmbed) AddItems(values ...string) {
	for _, value := range values {
		//val := value //拷贝一份，否则for 去地址得到的会是最后一个值的地址
		embed.items = append(embed.items, value)
	}

}

func (embed *DqTemplateEmbed) GetFormatEmbed() *dto.Embed {
	listItems := make([]*dto.EmbedField, len(embed.items))
	//组装数据
	for i, item := range embed.items {
		val := &dto.EmbedField{
			Name:  item,
			Value: "",
		}
		listItems[i] = val
	}

	return &dto.Embed{
		Title: embed.title,
		Thumbnail: dto.MessageEmbedThumbnail{
			URL: embed.img,
		},
		Fields: listItems,
	}
}
