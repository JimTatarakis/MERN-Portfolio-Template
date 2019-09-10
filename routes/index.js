const path = require("path");
const router = require("express").Router();
const apiRoutes = require('../routes/db-api');
const userRoutes = require('../routes/db-user');

// API Routes
// =============================================================
router.use("/api", apiRoutes);
router.use("/user", userRoutes);

// API: If no routes are used, send client side app.
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

module.exports = router;