const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
  roles_name: { type: String, required: true },
});
const Roles = mongoose.model("roles", rolesSchema);
module.exports = Roles;
