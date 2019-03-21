'use strict'

const Proveedor = use('app/Models/Proveedor')

class ProveedoresIController {
    async viewp ({ view }){

        const Proveedor = await Proveedor.all();
        
        return view.render('proveedor.infop', {
            proveedor: proveedor.JSON()
        })
    }
}

module.exports = ProveedoresIController
