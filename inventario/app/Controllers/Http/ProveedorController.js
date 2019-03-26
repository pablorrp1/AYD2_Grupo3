'use strict'

const Database = use('Database')
const Proveedor = use('App/Models/Proveedor')

class ProveedorController {
    async viewp ({ view,auth }){
        const proveedores = await Database
            .table('proveedors')
            .select('*')
            .where('cod_usuario', 7)
        
        return view.render('proveedor.infop',{
            proveedores:proveedores
        })
    }

    async add ({ view }){
        return view.render('proveedor.agregar')
    }

    async store({ request, response}) {
        const provee = new Proveedor();
        provee.nombre = request.input('p_nombre')
        provee.direccion = request.input('p_direccion')
        provee.telefono = request.input('p_telefono')
        provee.email = request.input('p_email')
        provee.cod_usuario = 7

        await provee.save()
        return response.redirect('/proveedor/infop')

    }
}

module.exports = ProveedorController
