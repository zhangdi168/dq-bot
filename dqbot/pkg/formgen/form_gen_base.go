package formgen

import (
	"strings"
)

// FormGen 表单模板生成的父类
type FormGen struct {
	Label string
	Name  string
	Value string
}

func NewGenBase(label string, name string) *FormGen {
	return &FormGen{
		Label: label,
		Name:  name,
		Value: "",
	}
}

// GenBase 替换基础变量并生成hml
func (p *FormGen) GenBase(template string, replacesEx map[string]string) string {
	replaces := make(map[string]string, 4)
	replaces["[$label]"] = p.Label
	replaces["[$name]"] = p.Name
	replaces["[$value]"] = p.Value

	var result string = template
	//替换基础的
	for k, v := range replaces {
		result = strings.ReplaceAll(result, k, v)
	}

	//替换额外的
	for k1, v1 := range replacesEx {
		result = strings.ReplaceAll(result, k1, v1)
	}

	return result
}

//func (p *FormGen) Gen() template.HTML {
//	replaces := make(map[string]string, 1)
//	replaces["[$max_len]"] = "test_replace"
//	result := p.GenBase(templateRadio, replaces)
//	return template.HTML(result)
//}
