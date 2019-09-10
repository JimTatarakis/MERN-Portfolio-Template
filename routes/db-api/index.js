// Dependencies
// =============================================================
const router = require("express").Router();
const controller = require("../../controllers/controller");
const axios = require("axios");

// Project Routes
// =============================================================
// Matches with "/api/projects"
router
    .route("/projects")
    .get(controller.findAll)
    .post(controller.create);

// Matches with "/api/project/:id"
// =============================================================
router
    .route("/projects/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove);

module.exports = router;