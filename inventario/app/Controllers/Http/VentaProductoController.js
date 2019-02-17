'use strict'

const Producto = use('App/Models/Producto')

class VentaProductoController {
    async index({params, view}){
        const prods = await Producto.all()
        return view.render('venta.agregarproducto',{
            prods : prods.toJSON()
        })
    }


}

module.exports = VentaProductoController
