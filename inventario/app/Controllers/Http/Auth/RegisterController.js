"use strict";

const { validateAll } = use("Validator");
const User = use("App/Models/User");
const randomString = require("random-string");

class RegisterController {
  showRegisterForm({ view }) {
    return view.render("auth.register");
  }

  async register({ request, session, response }) {
    const validation = await validateAll(request.all(), {
      name: "required|unique:users, nombre",
      username: "required|unique:users,usuario",
      email: "required|unique:users,email",
      password: "required"
    });
    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(["password"]);
      session.flash({
        notification: {
          type: "danger",
          message: "Error en uno de los campos. Intente de nuevo"
        }
      });
      return response.redirect("back");
    }

    const user = await User.create({
      nombre: request.input("name"),
      usuario: request.input("username"),
      email: request.input("email"),
      password: request.input("password")
    });

    return response.redirect("back");
  }
}

module.exports = RegisterController;
