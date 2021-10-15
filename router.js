module.exports = (app) => {
	const authRoutes = reqlib("/routes/auth");

	// Routes
	app.use("/api/auth", authRoutes);
};
