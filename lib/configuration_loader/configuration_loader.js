

var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var yaml = require('js-yaml');


function ConfigurationLoader(defaultConfigFilePath, currentConfigFilePath) {
    this.defaultConfigFilePath = path.resolve(defaultConfigFilePath);
    this.currentConfigFilePath = path.resolve(currentConfigFilePath);

    this.config = {};
    return this;
};

ConfigurationLoader.prototype.reloadFromFile = function (configFilePath) {
    this.currentConfigFilePath = configFilePath;
    this.reload();
};

ConfigurationLoader.prototype.reload = function () {

    // Check config files existing
    if (!fs.existsSync(this.defaultConfigFilePath)) {
        throw new Error("Default configuration file is missing. " + this.defaultConfigFilePath);
    }

    if (!fs.existsSync(this.currentConfigFilePath)) {
        throw new Error("Current configuration file is missing." + this.currentConfigFilePath);
    }

    // Load config
    var defaultConfig = yaml.safeLoad(fs.readFileSync(this.defaultConfigFilePath, 'utf8'), {filename: this.defaultConfigFilePath});
    var currentConfig = yaml.safeLoad(fs.readFileSync(this.currentConfigFilePath, 'utf8'), {filename: this.currentConfigFilePath});
    this.config = _.merge(defaultConfig, currentConfig);

    return _.cloneDeep(this.config);
};

module.exports = ConfigurationLoader;
