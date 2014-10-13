var should = require('chai').should(),
    CS = require('../index.js');

var createLoader = CS.createLoader;


describe('#createLoader', function () {
    it('load default.yml and custom.yml', function () {
        var loader = createLoader('./test/conf/default.yml', './test/conf/custom.yml');
        var cfg = loader.reload();

        var f2 = cfg.field2;
        f2.should.equal("value2-");

    });
});

