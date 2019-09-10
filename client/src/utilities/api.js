import axios from 'axios';

export default {
    // Project: Creates a new project
    create: function (data) {
        return axios.post("/api/projects", data);
    },
    // Project: Updates a project
    update: function (id) {
        return axios.put("/api/projects/" + id);
    },
    // Project: Deletes a project
    delete: function (id) {
        return axios.delete("/api/projects/" + id);
    },
    // Project: Finds all the Projects
    findAll: function () {
        return axios.get("/api/projects");
    },
    // Project: Finds a one Projecct
    findOne: function () {
        return axios.get("/api/projects/" + id);
    },
}