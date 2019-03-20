'use strict'

class ProveedoreController {
    async add ({view}){
        return view.render('proveedor.agregar')
    }
}

module.exports = ProveedoreController
