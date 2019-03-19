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

Route.on("/").render("/auth/login");

Route.on('/home').render('Menu_admin')

Route.on('/venta/crearventa').render('venta/crearventa')
Route.get('/VentaControl0', 'VentaControl0Controller.index')
Route.post('/venta', 'VentaControl0Controller.storeVenta')

Route.get("/venta/:id", "VentaProductoController.index")
    
Route.get('/producto/agregar', 'ProductocontrolController.add')
Route.post('/producto', 'ProductocontrolController.store')

Route.get('register','Auth/RegisterController.showRegisterForm')
Route.post('register', 'Auth/RegisterController.register').as('register')

Route.get('login','Auth/LoginController.showLoginForm')
Route.post('login', 'Auth/LoginController.login').as('login')

Route.get('logout', 'Auth/AuthenticatedController.logout')



/*
    Route.get('<ruta>',function(){})
    Route.get('<ruta>/<:id>',function({params}){})
    Route.get('<ruta>','<controlador>.<funcion>')
*/