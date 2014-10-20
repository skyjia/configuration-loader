var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var yaml = require('js-yaml');


function ConfigurationLoader() {
    this.configFilePathList = [];
    this.config = {};
}

ConfigurationLoader.prototype.setPathList = function(){
    var args =  Array.prototype.slice.call(arguments);

    if(args.length === 0){
        throw new Error('Must assign a config file path at least.');
    }

    if(args.length>0){
        args = _.flatten(args);
    }


    this.configFilePathList = args;
};

ConfigurationLoader.prototype.reload = function () {
    var cfg = {};

    if(this.configFilePathList.length>0){

        _.forEach(this.configFilePathList, function(path){

            if (!fs.existsSync(path)) {
                throw new Error("Configuration file is missing: " + path);
            }

            var config = yaml.safeLoad(fs.readFileSync(path, 'utf8'), {filename: path});
            cfg = _.merge(cfg, config);
        });

    }

    this.config = cfg;
    return _.cloneDeep(this.config);
};

ConfigurationLoader.prototype.getConfig = function () {
    return _.cloneDeep(this.config);
};

module.exports = ConfigurationLoader;
