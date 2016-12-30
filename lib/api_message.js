var util = require('./util');
var wrapper = util.wrapper;
var postJSON = util.postJSON;

/**
 * 客服消息，发送文字消息
 * 详细细节 http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr1
 * Examples:
 * ```
 * api.sendText('openid', 'Hello world', callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * @param {String} openid 用户的openid
 * @param {String} text 发送的消息内容
 * @param {Function} callback 回调函数
 */
exports.sendText = function (openid, text, callback) {
  this.preRequest(this._sendText, arguments);
};

/*!
 * 客服消息，发送文字消息的未封装版本
 */
exports._sendText = function (openid, text, callback) {
 /* {
    "touser":"OPENID",
    "msgtype":"text",
    "text":
    {
         "content":"Hello World"
    }
}*/
  var url = this.prefix + 'customer/send?access_token=' + this.token.accessToken;
  var data = {
    "touser": openid,
    "msgtype": "text",
    "text": {
      "content": text
    }
  };
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 客服消息，发送图片消息
 * 详细细节 http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr2
 * Examples:
 * ```
 * api.sendImage('openid', 'media_id', callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * @param {String} openid 用户的openid
 * @param {String} mediaId 发送的图片的媒体ID
 * @param {Function} callback 回调函数
 */
exports.sendImage = function (openid, mediaId, callback) {
  this.preRequest(this._sendImage, arguments);
};

/*!
 * 客服消息，发送图片消息的未封装版本
 */
exports._sendImage = function (openid, mediaId, callback) {
/* {
    "touser":"OPENID",
    "msgtype":"image",
    "image":
    {
      "media_id":"MEDIA_ID"
    }
}*/
  var url = this.prefix + 'customer/send?access_token=' + this.token.accessToken;
  var data = {
    "touser": openid,
    "msgtype":"image",
    "image": {
      "media_id": mediaId
    }
  };
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 客服消息，发送语音消息
 * 详细细节 http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr3
 * Examples:
 * ```
 * api.sendVoice('openid', 'media_id', callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * @param {String} openid 用户的openid
 * @param {String} mediaId 媒体文件的ID
 * @param {Function} callback 回调函数
 */
exports.sendVoice = function (openid, mediaId, callback) {
  this.preRequest(this._sendVoice, arguments);
};

/*!
 * 客服消息，发送语音消息的未封装版本
 */
exports._sendVoice = function (openid, mediaId, callback) {
 /* {
    "touser":"OPENID",
    "msgtype":"voice",
    "voice":
    {
      "media_id":"MEDIA_ID"
    }
}*/
  var url = this.prefix + 'customer/send?access_token=' + this.token.accessToken;
  var data = {
    "touser": openid,
    "msgtype": "voice",
    "voice": {
      "media_id": mediaId
    }
  };
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 客服消息，发送视频消息
 * 详细细节 http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr5
 * Examples:
 * ```
 * api.sendVideo('openid', 'media_id', 'thumb_media_id', "title", "description", callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * @param {String} openid 用户的openid
 * @param {String} mediaId 媒体文件的ID
 * @param {String} thumbMediaId 缩略图文件的ID
 * @param {String} title 标题
 * @param {String} description 描述
 * @param {Function} callback 回调函数
 */
exports.sendVideo = function (openid, mediaId, thumbMediaId, callback) {
  this.preRequest(this._sendVideo, arguments);
};

/*!
 * 客服消息，发送视频消息的未封装版本
 */
exports._sendVideo = function (openid, mediaId, thumbMediaId, title, description, callback) {
/*  {
    "touser": "OPENID",
    "msgtype": "video",
    "video": {
      "media_id": "MEDIA_ID",
      "thumb_media_id": "MEDIA_ID",
      "title": "TITLE",
      "description": "DESCRIPTION"
    }
  }*/
  var url = this.prefix + 'customer/send?access_token=' + this.token.accessToken;
  var data = {
    "touser": openid,
    "msgtype":"video",
    "video": {
      "media_id": mediaId,
      "thumb_media_id": thumbMediaId,
      "title": title,
      "description": description
    }
  };
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 客服消息，发送图文消息
 * 详细细节 http://gz.feixin.10086.cn/Open/Index/apidoc/flag/8-2#gr4
 * Examples:
 * ```
 * var articles = [
 *  {
 *    "title":"Happy Day",
 *    "description":"Is Really A Happy Day",
 *    "url":"URL",
 *    "media_id":"media_id"
 *  },
 *  {
 *    "title":"Happy Day",
 *    "description":"Is Really A Happy Day",
 *    "url":"URL",
 *    "media_id":"media_id" 
 *  }];
 * api.sendNews('openid', articles, callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * @param {String} openid 用户的openid
 * @param {Array} articles 图文列表
 * @param {Function} callback 回调函数
 */
exports.sendNews = function (openid, articles, callback) {
  this.preRequest(this._sendNews, arguments);
};

/*!
 * 客服消息，发送图文消息
 */
exports._sendNews = function (openid, articles, callback) {
/* {
    "touser":"OPENID",
    "msgtype":"news",
    "news":{
        "articles": [
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
         }
         ]
    }
}*/
  var url = this.prefix + 'customer/send?access_token=' + this.token.accessToken;
  var data = {
    "touser": openid,
    "msgtype":"news",
    "news": {
      "articles": articles
    }
  };
  this.request(url, postJSON(data), wrapper(callback));
};