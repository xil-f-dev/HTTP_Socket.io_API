const db = reqlib("/utils/dbconnect");

// Event emitter
const notifier = reqlib("/utils/Notifier.js");
// notifier.emit("someEvent", "some data")

exports.register = async (req, res, next) => {
	res.json({
		message: "register",
	});
};

exports.login = async (req, res, next) => {
	res.json({
		message: "login",
	});
};
