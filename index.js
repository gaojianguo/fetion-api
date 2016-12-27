'use strict';

var API = require('./lib/api_common');
// 自定义菜单接口
API.mixin(require('./lib/api_menu'));

module.exports = API;