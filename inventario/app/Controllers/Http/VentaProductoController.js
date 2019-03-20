'use strict'

const Database = use('Database')

const Producto = use('App/Models/Producto')


class VentaProductoController {
    async index({auth, params, view}){

        const prods = await Database.from('productos').where('cod_usuario', auth.user.id)
        return view.render('venta.agregarproducto',{
            prods : prods
        })
    }


}

module.exports = VentaProductoController
