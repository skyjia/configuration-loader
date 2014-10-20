var should = require('chai').should(),
    CS = require('../index.js');

var createLoader = CS.createLoader;

describe('#createLoader', function () {
    it('load default.yml only', function () {
        var loader = createLoader('./test/conf/default.yml');
        var cfg = loader.reload();

        var v = cfg.field3.field3_1;
        v.should.equal("value3_1");
    });

    it('load default.yml and custom.yml by array', function () {
        var loader = createLoader(['./test/conf/default.yml', './test/conf/custom.yml']);
        var cfg = loader.reload();

        var f2 = cfg.field2;
        f2.should.equal("value2-");

    });

    it('load default.yml and custom.yml by dynamic arguments', function () {
        var loader = createLoader('./test/conf/default.yml', './test/conf/custom.yml');
        var cfg = loader.reload();

        var f2 = cfg.field2;
        f2.should.equal("value2-");

    });
});

