
var ConfigurationLoader = require('./configuration_loader/configuration_loader.js');

module.exports.ConfigurationLoader = ConfigurationLoader;
module.exports.createLoader = function(){
    var loader = new ConfigurationLoader();
    loader.setPathList.apply(loader,arguments);
    return loader;
};