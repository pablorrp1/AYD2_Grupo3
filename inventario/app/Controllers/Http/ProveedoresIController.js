'use strict'

const Proveedor = use('App/Models/Proveedor')

class ProveedoresIController {
    async viewp ({ view }){
        return view.render('proveedor.infop')
        const proveedores = await Proveedor.all();
        proveedores: proveedores.toJSON()
    }
}

module.exports = ProveedoresIController
