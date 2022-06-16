package formgen

import (
	"html/template"
	"strconv"
)

// FormTextarea 生成文本框，继承自formGen
type FormTextarea struct {
	*FormGen
	Maxlen      int8 //文本框的额外属性
	placeholder string
}

func NewTextarea(label string, name string) *FormTextarea {
	return &FormTextarea{
		FormGen:     NewGenBase(label, name),
		placeholder: "请输入" + label, //默认最大长度是10
		Maxlen:      8,             //默认最大长度是10
	}
}

func (t *FormTextarea) Value(val string) *FormTextarea {
	t.FormGen.Value = val
	return t
}

func (t *FormTextarea) Placeholder(val string) *FormTextarea {
	t.placeholder = val
	return t
}

func (t *FormTextarea) MaxLen(val int8) *FormTextarea {
	t.Maxlen = val
	return t
}

func (t FormTextarea) Gen() template.HTML {
	replaces := make(map[string]string, 1)
	replaces["[$maxlength]"] = strconv.Itoa(int(t.Maxlen))
	replaces["[$Placeholder]"] = t.placeholder
	result := t.GenBase(templateTextarea, replaces)
	return template.HTML(result)
}
