'use strict'

const Venta = use('App/Models/Venta')

class VentaControl0Controller {

    async storeSale({request, response, session}){
        const post = new Venta();
        post.fecha = request.input('fecha')
        post.descuento = request.input('descuento')

        await post.save()

        session.flash({ notification: 'Venta creada con exito '})
        
        return response.redirect('/venta/{id}')
    }
}

module.exports = VentaControl0Controller
