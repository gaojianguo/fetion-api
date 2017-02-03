# fetion-api
Fetion-API
===========
飞信公共平台API。

##
https://github.com/gaojianguo/fetion-api.git


## 功能列表
- 发送客服消息（文本、图片、语音、视频、图文）
- 菜单管理（查询、创建、删除）
- 分组管理（查询、创建、修改、设置用户到分组）
- 用户管理（获取关注用户列表）
- 媒体管理（上传、下载）

## Installation

```sh
$ npm install fetion-api
```

## Usage

```js
var FetionAPI = require('fetion-api');

var api = new FetionAPI(appid, appsecret);

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
## 菜单管理：高级菜单创建接口
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/6-1
```js
menu = {
	 "button":[
	   {
	     "type":"click",
	     "name":"今日歌曲",
	     "key":"V1001_TODAY_MUSIC"
	   },
	   {
	     "name":"菜单",
	     "sub_button":[
	       {
	         "type":"view",
	         "name":"搜索",
	         "url":"http://www.soso.com/"
	       },
	       {
	         "type":"click",
	         "name":"赞一下我们",
	         "key":"V1001_GOOD"
	       }]
	     }]
	   }
	 ]
	}

api.createMenu(menu, callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{"errcode":0,"errmsg":"ok"}

参数说明：
menu(Object)	菜单对象
```
## 菜单管理：高级菜单查询接口
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/6-2
```js
api.getMenu(callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{
 "menu": {
   "button":[
     {"type":"click","name":"今日歌曲","key":"V1001_TODAY_MUSIC","sub_button":[]},
     {"type":"click","name":"歌手简介","key":"V1001_TODAY_SINGER","sub_button":[]},
     {"name":"菜单","sub_button":[
       {"type":"view","name":"搜索","url":"http://www.soso.com/","sub_button":[]},
       {"type":"view","name":"视频","url":"http://v.qq.com/","sub_button":[]},
       {"type":"click","name":"赞一下我们","key":"V1001_GOOD","sub_button":[]}]
     }
   ]
 }
}
```

## 高级菜单删除接口
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/6-3
```js
api.removeMenu(callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{"errcode":0,"errmsg":"ok"}

```

## 分组管理：查询当前分组标签信息
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-4
```js
api.getGroups(callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{
 "groups": [
   {"id": 0, "name": "未分组", "count": 72596},
   {"id": 1, "name": "黑名单", "count": 36}
 ]
}
```

## 分组管理：创建分组
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-7
```js
api.createGroup('groupname', callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{"group": {"id": 107, "name": "test"}}

参数说明：
name(String)	分组名字
```
## 分组管理：设置分组标签（更新分组）
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-5
```js
api.updateGroup(107, 'new groupname', callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{"errcode": 0, "errmsg": "ok"}

id(Number)	分组ID
name(String)	新的分组名字
```

## 分组管理：设置用户分组标签
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-6
```js
api.moveUserToGroup(openid, groupId, callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{"errcode": 0, "errmsg": "ok"}

openid(String)	用户的openid
groupId(Number)	分组ID
```

## 分组管理：删除分组
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-8
```js
api.removeGroup(groupId, callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{"errcode": 0, "errmsg": "ok"}

参数说明：
groupId(Number)	分组ID
```
##用户管理，获取关注用户列表
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-3
```js
api.getFollowers(callback);
// or
api.getFollowers(nextOpenid, callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{
 "total":2,
 "count":2,
 "data":{
   "openid":["","OPENID1","OPENID2"]
 },
 "next_openid":"NEXT_OPENID"
}

参数说明：
nextOpenid(String)	调用一次之后，传递回来的nextOpenid。第一次获取时可不填
```
##媒体管理，上传多媒体文件
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/4-4#gr1
```js
api.uploadMedia('filepath', type, callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的对象

Result:
{"type":"TYPE","media_id":"MEDIA_ID","created_at":123456789}

Shortcut:
exports.uploadImage(filepath, callback);
exports.uploadVoice(filepath, callback);
exports.uploadVideo(filepath, callback);
exports.uploadThumb(filepath, callback);

参数说明：
filepath(String)	文件路径
type(String)	媒体类型，可用值有image、voice、video、thumb
callback(Function)	回调函数
```

##媒体管理，下载多媒体文件
详细细节：http://gz.feixin.10086.cn/Open/Index/apidoc/flag/4-4#gr2
```js
api.getMedia('media_id', callback);

Callback:
err, 调用失败时得到的异常
result, 调用正常时得到的文件Buffer对象
res, HTTP响应对象

参数说明：
mediaId(String)	媒体文件的ID
```

## 详细API
原始API文档请参见：[消息接口指南](http://gz.feixin.10086.cn/Open/Index/apidoc)。
