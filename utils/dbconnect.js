const config = reqlib("/config/config.json");

var mysql = require("mysql");
var connection = mysql.createConnection({
	host: config.database.hostname,
	user: config.database.user,
	password: config.database.password,
	port: config.database.port,
	database: config.database.database,
});

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
