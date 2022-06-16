package formgen

import (
	"html/template"
	"strconv"
)

// FormText 生成文本框，继承自formGen
type FormText struct {
	*FormGen
	Maxlen      int8 //文本框的额外属性
	placeholder string
}

func NewText(label string, name string) *FormText {
	return &FormText{
		FormGen:     NewGenBase(label, name),
		placeholder: "请输入" + label, //默认最大长度是10
		Maxlen:      8,             //默认最大长度是10
	}
}

func (t *FormText) Value(val string) *FormText {
	t.FormGen.Value = val
	return t
}

func (t *FormText) Placeholder(val string) *FormText {
	t.placeholder = val
	return t
}

func (t *FormText) MaxLen(val int8) *FormText {
	t.Maxlen = val
	return t
}

func (t FormText) Gen() template.HTML {
	replaces := make(map[string]string, 1)
	replaces["[$maxlength]"] = strconv.Itoa(int(t.Maxlen))
	replaces["[$placeholder]"] = t.placeholder
	result := t.GenBase(templateText, replaces)
	return template.HTML(result)
}
