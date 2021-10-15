const { readFileSync } = require("fs");
const appRoot = require("app-root-path");

module.exports.settings = () => {
	return JSON.parse(readFileSync(`${appRoot}/config/settings.json`));
};
