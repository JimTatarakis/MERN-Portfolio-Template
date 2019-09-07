import axios from 'axios';

export default {
    create: function (data) {
        return axios.post("/api/projects", data);
    },

    update: function (id) {
        return axios.put("/api/projects/" + id);
    },

    delete: function (id) {
        return axios.delete("/api/projects/" + id);
    },

    find: function () {
        return axios.get("/api/projects");
    },

    findUser: function () {
        return axios.get("/api/users");
    }
}