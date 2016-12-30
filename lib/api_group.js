var util = require('./util');
var wrapper = util.wrapper;
var postJSON = util.postJSON;

/**
 * 获取分组列表
 * 详情请见：<http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-4>
 * Examples:
 * ```
 * api.getGroups(callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * Result:
 * ```
 * {
 *  "groups": [
 *    {"id": 0, "name": "未分组", "count": 72596},
 *    {"id": 1, "name": "黑名单", "count": 36}
 *  ]
 * }
 * 
 * ```
 * @param {Array} groups 公众平台分组信息列表
 * @param {Number} id 分组ID，由公众平台分配
 * @param {String} name 分组名，UTF8编码
 * @param {NUmber} count 分组内用户数量
 * @param {Function} callback 回调函数
 */
exports.getGroups = function (callback) {
  this.preRequest(this._getGroups, arguments);
};

/*!
 * 获取分组列表的未封装版本
 */
exports._getGroups = function (callback) {
  var url = this.prefix + 'groups/get?access_token=' + this.token.accessToken;
  this.request(url, {dataType: 'json'}, wrapper(callback));
};

/**
 * 创建分组
 * 详情请见：<http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-7>
 * Examples:
 * ```
 * api.createGroup('groupname', callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * Result:
 * ```
 * {"group": {"id": 107, "name": "test"}}
 * ```
 * @param {String} name 分组名字
 * @param {Function} callback 回调函数
 */
exports.createGroup = function (name, callback) {
  this.preRequest(this._createGroup, arguments);
};

/*!
 * 创建分组的未封装版本
 */
exports._createGroup = function (name, callback) {
  var url = this.prefix + 'groups/create?access_token=' + this.token.accessToken;
  var data = {
    "group": {"name": name}
  };
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 更新分组名字
 * 详情请见：<http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-5>
 * Examples:
 * ```
 * api.updateGroup(107, 'new groupname', callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * Result:
 * ```
 * {"errcode": 0, "errmsg": "ok"}
 * ```
 * @param {Number} id 分组ID
 * @param {String} name 新的分组名字
 * @param {Function} callback 回调函数
 */
exports.updateGroup = function (id, name, callback) {
  this.preRequest(this._updateGroup, arguments);
};

/*!
 * 更新分组名字的未封装版本
 */
exports._updateGroup = function (id, name, callback) {
  // POST数据格式：json
  // POST数据例子：{"group":{"id":108,"name":"test2_modify2"}}
  var url = this.prefix + 'groups/update?access_token=' + this.token.accessToken;
  var data = {
    "group": {"id": id, "name": name}
  };
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 设置用户分组标签
 * 详情请见：<http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-6>
 * Examples:
 * ```
 * api.moveUserToGroup(openid, groupId, callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * Result:
 * ```
 * {"errcode": 0, "errmsg": "ok"}
 * ```
 * @param {String} openid 用户的openid
 * @param {Number} groupId 分组ID
 * @param {Function} callback 回调函数
 */
exports.moveUserToGroup = function (openid, groupId, callback) {
  this.preRequest(this._moveUserToGroup, arguments);
};

/*!
 * 移动用户进分组的未封装版本
 */
exports._moveUserToGroup = function (openid, groupId, callback) {
  // POST数据格式：json
  // POST数据例子：{"openid":"oDF3iYx0ro3_7jD4HFRDfrjdCM58","to_groupid":108}
  var url = this.prefix + 'groups/members_update?access_token=' + this.token.accessToken;
  var data = {
    "openid": openid,
    "to_groupid": groupId
  };
  this.request(url, postJSON(data), wrapper(callback));
};

/**
 * 删除分组
 * 详情请见：<http://gz.feixin.10086.cn/Open/Index/apidoc/flag/5-8>
 * Examples:
 * ```
 * api.removeGroup(groupId, callback);
 * ```
 * Callback:
 *
 * - `err`, 调用失败时得到的异常
 * - `result`, 调用正常时得到的对象
 *
 * Result:
 * ```
 * {"errcode": 0, "errmsg": "ok"}
 * ```
 * @param {Number} groupId 分组ID
 * @param {Function} callback 回调函数
 */
exports.removeGroup = function (groupId, callback) {
  this.preRequest(this._removeGroup, arguments);
};

/*!
 * 移动用户进分组的未封装版本
 */
exports._removeGroup = function (groupId, callback) {
  var url = this.prefix + 'groups/del?access_token=' + this.token.accessToken;
  var data = {
    "group": { id: groupId}
  };
  this.request(url, postJSON(data), wrapper(callback));
};

