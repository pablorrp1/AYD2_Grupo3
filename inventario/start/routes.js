'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
//sesion
Route.get("/",                      'Auth/LoginController.sesion');
Route.post('register',              'Auth/RegisterController.register').as('register')
Route.post('login',                 'Auth/LoginController.login').as('login')
Route.get('logout',                 'Auth/AuthenticatedController.logout')

//usuarios
Route.get("/usuarios",              'UsuarioController.index')

//productos
Route.get("/producto/lista",        'ProductoController.index')
Route.get('/producto/agregar',      'ProductoController.add')
Route.post('/producto',             'ProductoController.store')
Route.get("/producto/retiro/:id",   'ProductoController.retiro')
Route.put("/retiro/:id",            'RetiroController.store')

//retiros
Route.get("/retiros/lista",         'RetiroController.index')

//proveedores
Route.get('/proveedor/lista',       'ProveedorController.index')
Route.get('/proveedor/agregar',     'ProveedorController.add')
Route.post('/proveedor',            'ProveedorController.store')

//descuentos
Route.get('/descuento/lista',       'DescuentoController.index')



/*
Route.on('/venta/crearventa').render('venta/crearventa')
Route.get('/VentaControl0', 'DescuentoController.index')
Route.post('/venta', 'DescuentoController.storeVenta')*/



    




