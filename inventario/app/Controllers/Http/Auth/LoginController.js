"use strict";

const User = use("App/Models/User");
const Hash = use("Hash");
class LoginController {
  async login({ request, auth, session, response }) {
    const { username, pass, remember } = request.all();

    const user = await User.query()
      .where("usuario ", username)
      .first();

    // verificar contraseña
    if (user) {
      const passwordVerified = await Hash.verify(pass, user.password);

      if (passwordVerified) {
        await auth.remember(!!remember).login(user);
        return response.route("home");
      }
    }
    //error
    session.flash({
      notification: {
        type: "danger",
        message: "No se puede ingresar, verificar credenciales"
      }
    });
    return response.redirect("back");
  }
}

module.exports = LoginController;
