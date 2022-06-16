package formgen

//文本表单模板
var templateText string = `
<div class="form-group">
	<label class="form-item-label">[$label]:</label>
	<input type="text" value="[$value]" class="form-control" maxlength="[$maxlength]" id="[$name]" Placeholder="[$placeholder]">
</div>
`

//【多行文本】表单模板
var templateTextarea string = `
<div class="form-group">
	<label class="form-item-label">[$label]:</label>
	<textarea type="text" class="form-control" maxlength="[$maxlength]" id="[$name]" placeholder="[$Placeholder]"> </textarea>
</div>
`

//【单选框】表单模板
var templateRadio string = `
<div class="form-group">
	<label class="form-item-label">[$label]:</label>
	<div>
		[$radio_items]
	</div>
</div>
`

//【单选框-单项】表单模板
var templateRadioItem string = `
<label class="radio-inline">
	<input type="radio" name="[$name]" id="options[$id]"  value="[$val]"  [$checked]> [$text]
</label>
`
