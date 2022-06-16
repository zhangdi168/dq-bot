package formgen

import (
	"html/template"
	"strings"
)

// FormText 生成文本框，继承自formGen
type FormRadio struct {
	*FormGen
	items []*RadioItem
}
type RadioItem struct {
	Text  string
	Value string
}

func NewRadio(label string, name string, items []*RadioItem) *FormRadio {
	return &FormRadio{
		FormGen: NewGenBase(label, name),
		items:   items,
	}
}

func (t *FormRadio) Value(val string) *FormRadio {
	t.FormGen.Value = val
	return t
}

func (t *FormRadio) Gen() template.HTML {
	replaces := make(map[string]string, 1)
	//构造选项
	itemList := ""
	for index, item := range t.items {
		temp := templateRadioItem
		temp = strings.ReplaceAll(temp, "[$name]", t.FormGen.Name)
		temp = strings.ReplaceAll(temp, "[$val]", item.Value)
		temp = strings.ReplaceAll(temp, "[$id]", t.FormGen.Name+string(index))
		temp = strings.ReplaceAll(temp, "[$text]", item.Text)
		//是否选中
		checked := ""
		if t.FormGen.Value == item.Value {
			checked = "checked"
		}
		temp = strings.ReplaceAll(temp, "[$checked]", checked)
		//拼接到列表
		itemList = itemList + temp
	}

	//构造大项
	replaces["[$radio_items]"] = itemList
	result := t.GenBase(templateRadio, replaces)

	return template.HTML(result)
}
