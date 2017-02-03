'use strict';

var API = require('./lib/api_common');
// 自定义菜单接口
API.mixin(require('./lib/api_menu'));
// 用户分组管理
API.mixin(require('./lib/api_group'));
// 客服消息
API.mixin(require('./lib/api_message'));
// 媒体管理（上传、下载）
API.mixin(require('./lib/api_media'));
// 用户信息
API.mixin(require('./lib/api_user'));

module.exports = API;