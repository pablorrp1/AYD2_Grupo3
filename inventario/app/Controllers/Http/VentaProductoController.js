"use strict";

const Database = use("Database");
const Producto = use("App/Models/Producto");

const HistorialRetiro = use("App/Models/HistorialRetiro");

class VentaProductoController {
  async index({ request, auth, view }) {
    const page = request.get().page || 1;
    const prods = await Database.table("productos")
      .select("productos.nombre")
      .select("historial_retiros.cantidad_ven")
      .select(
        Database.raw(
          'DATE_FORMAT(historial_retiros.created_at, "%H:%i %d/%m/%Y") as date'
        )
      )
      //.select('detalle_ventas.created_at as date')
      .innerJoin(
        "historial_retiros",
        "productos.id",
        "historial_retiros.cod_producto"
      )
      .where("cod_usuario", auth.user.id)
      .orderBy("date", "asc")
      .paginate(page, 20);
    return view.render("producto.listaretiros", {
      prods: prods
    });
  }

  async store({ view, params, request, response, session }) {
    /*const producto = await Database.from('productos')
                .where('id',params.id)
                .first()*/
    const producto = await Producto.find(params.id);

    const retiro = request.input("retiro");
    producto.cantidad = producto.cantidad - retiro;

    await producto.save();

    const nDetalle = new HistorialRetiro();
    nDetalle.cantidad_ven = retiro;
    nDetalle.cod_producto = params.id;

    await nDetalle.save();

    session.flash({
      notification: "Se retiraron " + retiro + " unidades del inventario"
    });

    return response.redirect("/productos");
  }
}

module.exports = VentaProductoController;
