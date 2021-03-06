var util = require('./util');
var wrapper = util.wrapper;
var postJSON = util.postJSON;

/**
 * 获取关注者列表
 * 详细细节 http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-3
 * Examples:
 * ```
 * api.getFollowers(callback);
 * // or
 * api.getFollowers(nextOpenid, callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * Result:
 * ```
 * {
 *  "total":2,
 *  "count":2,
 *  "data":{
 *    "openid":["","OPENID1","OPENID2"]
 *  },
 *  "next_openid":"NEXT_OPENID"
 * }
 * ```
 * @param {String} nextOpenid 调用一次之后，传递回来的nextOpenid。第一次获取时可不填
 * @param {Function} callback 回调函数
 */
exports.getFollowers = function (nextOpenid, callback) {
  this.preRequest(this._getFollowers, arguments);
};

/*!
 * 获取关注者列表的未封装版本
 */
exports._getFollowers = function (nextOpenid, callback) {
  // http://221.176.30.209/op/open3/index.php/user/get?access_token=ACCESS_TOKEN&next_openid=NEXT_OPENID
  if (typeof nextOpenid === 'function') {
    callback = nextOpenid;
    nextOpenid = '';
  }

  let data = {
    access_token: this.token.accessToken,
    next_openid: nextOpenid
  }

  var url = this.prefix + 'user/get?next_openid=' + nextOpenid + '&access_token=' + this.token.accessToken;
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 获取用户信息
 */
exports.getUser = function (options, callback) {
  this.preRequest(this._getUser, arguments);
}

/**
 * 获取用户数据的未封装版本
 */
exports._getUser = function (options, callback) {
  if (typeof options !== 'object') {
    options = {
      openid: options,
      lang: 'en'
    };
  }

  data = {
    openid: options.openid,
    lang: options.lang,
    access_token: this.token.accessToken
  };

  let url = this.prefix + '/user/info?access_token=' + this.token.accessToken + '&openid=' + data.openid + '&lang=' + options.lang;
  this.request(url, postJSON(data), wrapper(callback));
}