#### dqbot168.dq_message 
自动回复关键词表

| 序号 | 名称 | 描述 | 类型 | 键 | 为空 | 额外 | 默认值 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 1 | id |  | int(11) | PRI | NO | auto_increment |  |
| 2 | message | 触发消息 | varchar(255) |  | YES |  |  |
| 3 | qq_user_id | qq的用户ID | varchar(100) |  | YES |  |  |
| 4 | channel_id | 频道Id | varchar(50) |  | YES |  |  |
| 5 | guild_id | 子频道Id | varchar(100) |  | YES |  |  |
| 6 | message_id | 消息ID | varchar(200) |  | YES |  |  |
| 7 | create_at | 创建时间 | timestamp |  | YES |  |  |
| 8 | update_at | 修改时间 | timestamp |  | YES |  |  |
