
var ConfigurationLoader = require('./configuration_loader/configuration_loader.js');

module.exports.ConfigurationLoader = ConfigurationLoader;
module.exports.createLoader = function(defaultConfigFilePath, currentConfigFilePath){
    return new ConfigurationLoader(defaultConfigFilePath, currentConfigFilePath);
};