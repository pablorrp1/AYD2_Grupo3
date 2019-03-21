'use strict'
const Database = use('Database')
const Producto = use('App/Models/Producto')

    async index({auth, params, view}){
        const prods = await Database.from('productos').where('cod_usuario', auth.user.id)
        return view.render('producto.lista',{
            prods : prods
        })
    }

    async retiro({params, view}){
        //console.log("en retiro")
        const prod = await Producto.find(params.id)

        return view.render('producto.retirar',{
            prod
        })
    }

    async add({view}){
        return view.render('producto.agregar')
        const Producto = await Producto.all();
        producto:producto.toJSON()
    }

async store({request, response, session,auth}){
    const post = new Producto();
    post.nombre =request.input('producto')
    post.descripcion =request.input('descripcion')
    post.cantidad =request.input('cantidad')
    post.precio =request.input('precio')
    post.cod_usuario = auth.user.id
    post.created_at  =request.input('proveedor')
    
    await post.save()
    
    session.flash({ notification: 'Producto Agregado con exito '})
    
    return response.redirect('home')
    }
}

module.exports = ProductocontrolController
