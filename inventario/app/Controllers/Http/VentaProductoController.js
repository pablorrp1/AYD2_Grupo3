'use strict'

const Database = use('Database')

const Producto = use('App/Models/Producto')


class VentaProductoController {
    async index({params, view}){
        const prods = await Database.from('productos').where('cod_usuario', 1)
        return view.render('venta.agregarproducto',{
            prods : prods
        })
    }


}

module.exports = VentaProductoController
