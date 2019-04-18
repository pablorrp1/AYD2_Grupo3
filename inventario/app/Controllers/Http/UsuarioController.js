"use strict";

const Database = use("Database");
const User = use("App/Models/User");

class UsuarioController {
  async index({ request, auth, view }) {
    const page = request.get().page || 1;
    const users = await Database.table('users')
    .select('nombre')
    .select('usuario')
    .select('email')
    .where("u_padre", auth.user.id)
    .paginate(page, 20);
    return view.render("usuario.lista", {
      users: users
    });
  }
}

module.exports = UsuarioController;
