'use strict'


const Database = use('Database')
const Producto = use('App/Models/Producto')

const DetalleVenta = use('App/Models/DetalleVenta')

class VentaProductoController {

    async index({auth, view}){
        const prods = await Database
            .table('productos')
            .select('productos.nombre')
            .select('detalle_ventas.cantidad_ven')
            .select(Database.raw('DATE_FORMAT(detalle_ventas.created_at, "%H:%i %d/%m/%Y") as date'))
            //.select('detalle_ventas.created_at as date')
            .innerJoin('detalle_ventas','productos.id','detalle_ventas.cod_producto')
            .where('cod_usuario', 7)
            .orderBy('date','asc')
        return view.render('producto.listaretiros',{
            prods : prods
        })
    }
   
    async store({view, params,request, response, session}) {
        /*const producto = await Database.from('productos')
                .where('id',params.id)
                .first()*/
        const producto = await Producto.find(params.id)

        const retiro = request.input('retiro')
        producto.cantidad = producto.cantidad-retiro

        await producto.save()

        const nDetalle = new DetalleVenta()
        nDetalle.cantidad_ven = retiro
        nDetalle.cod_producto = params.id

        await nDetalle.save()

        session.flash({ notification: 'Se retiraron '+retiro+' unidades del inventario'})

        return response.redirect('/productos')
    }
    


}

module.exports = VentaProductoController
