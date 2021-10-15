global.reqlib = require("app-root-path").require;

// Config
const config = reqlib("/config/config.json");
const { settings } = reqlib("/utils/getsettings.js");

socketioOptions = {
	// path: "/ws/",
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
};

// Server
const express = require("express");
const app = express();
const httpServer = require("http").Server(app);

// Init Socket.io server
const io = require("socket.io")(httpServer, socketioOptions);
reqlib("/ioserver")(io);

// Post request params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
reqlib("/router")(app);

const normalizePort = (val) => {
	return parseInt(val, 10);
};
const port = normalizePort(process.env.PORT || config.server.port);

// Handle errors
const errorHandler = (error) => {
	if (error.syscall !== "listen") {
		throw error;
	}
	const address = server.address();
	const bind = typeof address === "string" ? "pipe " + address : "port: " + port;
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges.");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use.");
			process.exit(1);
			break;
		default:
			throw error;
	}
};
httpServer.on("error", errorHandler);

httpServer.listen(port, function () {
	const address = httpServer.address();
	const bind = typeof address === "string" ? "pipe " + address : "port " + port;
	console.log("Listening on " + bind);
});

// Connect to db
global.db = reqlib("/utils/dbconnect.js");
