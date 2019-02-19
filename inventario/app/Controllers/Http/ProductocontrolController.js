'use strict'

const Producto = use('App/Models/Producto')
class ProductocontrolController {

    async add({view}){
    return view.render('producto.agregar')
    const Producto = await Producto.all();
    producto:producto.toJSON()
}

async store({request, response, session}){
    const post = new Producto();
    post.nombre =request.input('producto')
    post.descripcion =request.input('descripcion')
    post.cantidad =request.input('cantidad')
    post.precio =request.input('precio')
    post.cod_usuario = request.input('1')
    post.created_at  =request.input('proveedor')
    
    await post.save()
    
    session.flash({ notification: 'Producto Agregado con exito '})
    
    return response.redirect('/')
    
    }
    
}

module.exports = ProductocontrolController
