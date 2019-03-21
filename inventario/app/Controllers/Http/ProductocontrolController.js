'use strict'
const Database = use('Database')
const Producto = use('App/Models/Producto')
class ProductocontrolController {

    async index({auth, params, view}){
        const prods = await Database
            .table('productos')
            .select('productos.nombre')
            .select('productos.descripcion')
            .select('productos.precio')
            .select('productos.cantidad')
            //.select('productos.cod_proveedor')
            .select('proveedors.nombre as prov')
            .innerJoin('proveedors','productos.cod_proveedor','proveedors.id')
            .where('productos.cod_usuario', auth.user.id)
        //console.log(prods)
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

    async add({view, auth}){
    const provs = await Database.from('proveedors').where('cod_usuario', auth.user.id)
    return view.render('producto.agregar',{
        provs : provs
    })
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
    post.cod_proveedor  =request.input('proveedor')

    await post.save()
    
    session.flash({ notification: 'Producto Agregado con exito '})
    
    return response.redirect('/producto/agregar')
    
    }
    
}

module.exports = ProductocontrolController
