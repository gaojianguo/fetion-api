# fetion-api
Fetion-API
===========
飞信公共平台API。

##
https://github.com/gaojianguo/fetion-api.git


## 功能列表
- 发送客服消息（文本、图片、语音、视频、图文）
- 菜单操作（查询、创建、删除）
- 分组操作（查询、创建、修改、设置用户到分组）

## Installation

```sh
$ npm install fetion-api
```

## Usage

```js
var WechatAPI = require('wechat-api');

var api = new WechatAPI(appid, appsecret);

```

## 客服消息，发送文字消息
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr1
```js
api.sendText('openid', 'Hello world', callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

参数说明：
openid(String)	用户的openid
text(String)	发送的消息内容

```

## 客服消息，发送单图片消息
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr2
```js
api.sendImage('openid', 'media_id', callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

参数说明：
openid(String)	用户的openid
mediaId(String)	媒体文件的ID，参见uploadMedia方法

```
## 客服消息，发送语音消息
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr3
```js
api.sendVoice('openid', 'media_id', callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

参数说明：
openid(String)	用户的openid
mediaId(String)	媒体文件的ID
```

## 客服消息，发送视频消息
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr5
```js
api.sendVideo('openid', 'media_id', 'thumb_media_id', title, description, callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

参数说明：
openid(String)	用户的openid
mediaId(String)	媒体文件的ID
thumbMediaId(String)	缩略图文件的ID
title(String) 标题
description(String) 描述
```

##客服消息，发送图文消息
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr5
```js
var articles = [
 {
     "title":"Happy Day",
     "description":"Is Really A Happy Day",
     "url":"URL",
     "media_id":"media_id"
 },
 {
     "title":"Happy Day",
     "description":"Is Really A Happy Day",
     "url":"URL",
     "media_id":"media_id"
 }];
api.sendNews('openid', articles, callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

参数说明：
openid(String)	用户的openid
articles(Array)	图文列表
title(String)	标题
description(String)	描述
url(String)	点击后跳转的链接
media_id(Number)	图片的媒体ID
```





## 详细API
原始API文档请参见：[消息接口指南](http://gz.feixin.10086.cn/Open/Index/apidoc)。