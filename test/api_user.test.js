var config = require('./config');
var API = require('../');
var expect = require('expect.js');

describe('api_user', function () {
  var api = new API(config.appid, config.appsecret);
  var puling = 'ofL4cs7hr04cJIcu600_W-ZwwxHg';

  before(function (done) {
    api.getAccessToken(done);
  });

  it('getFollowers should ok', function (done) {
    api.getFollowers(function (err, data, res) {
      expect(err).not.to.be.ok();
      expect(data).to.only.have.keys('total', 'count', 'data', 'next_openid');
      done();
    });
  });

  it('getFollowers with nextOpenId should ok', function (done) {
    api.getFollowers(puling, function (err, data, res) {
      expect(err).not.to.be.ok();
      expect(data).to.have.key('next_openid');
      done();
    });
  });
  
});
