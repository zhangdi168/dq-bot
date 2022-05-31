#### dqbot168.dq_keywords 
自动回复关键词表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | id |  | int(11) | PRI | NO | auto_increment |  |
| 2 | word | 关键词 | varchar(50) |  | YES |  |  |
| 3 | sorted | 排序（越高越前面） | int(11) |  | YES |  |  |
| 4 | match_type | 匹配类型:all=全匹配,pre=前缀包含,suf=后缀包含,in=包含 | varchar(30) |  | NO |  | all |
| 5 | reply_type | 回复消息类型:text=文本,embed=embed,link=链接文本,text_image=文本缩略图有,image=大图 | varchar(50) |  | NO |  |  |
| 6 | touch_type | 触发类型:material=素材,plugin=插件 | varchar(20) |  | YES |  | material |
| 7 | reply_json | 返回的json数据，match_type=material才有效 | text |  | YES |  |  |
| 8 | plugin_id | 插件ID,match_type=plugin才有效 | int(11) |  | YES |  |  |
| 9 | remark | 关键词备注 | varchar(100) |  | YES |  |   |
| 10 | create_at | 创建时间 | timestamp |  | YES |  |  |
| 11 | update_at | 修改时间 | timestamp |  | YES |  |  |
