"use strict";

// bring the model
const Database = use("Database");
const Descuento = use("App/Models/Descuento");

class DescuentoController {
  async index({ request, auth, view }) {
    const page = request.get().page || 1;
    const descs = await Database.table("descuentos")
      .where("cod_usuario", auth.user.id)
      .paginate(page, 20);
    return view.render("descuento.lista", {
      descs: descs
    });
  }

  /*
    async storeVenta({request, response, session}){
        const post = new Venta();
        post.fecha = request.input('fecha')
        post.descuento = request.input('descuento')

        await post.save()

        session.flash({ notification: 'Venta creada con exito, agregue los productos de la venta'})
        
        return response.redirect('/venta/id')
    }*/
}

module.exports = DescuentoController;
