'use strict'

// bring the model
const Venta = use('App/Models/Venta')

class VentaControl0Controller {

    async storeVenta({request, response, session}){
        const post = new Venta();
        post.fecha = request.input('fecha')
        post.descuento = request.input('descuento')

        await post.save()

        session.flash({ notification: 'Venta creada con exito, agregue los productos de la venta'})
        
        return response.redirect('/venta/{id}')
    }


}

module.exports = VentaControl0Controller
