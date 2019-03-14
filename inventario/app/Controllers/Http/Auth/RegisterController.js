'use strict'


const {validateAll} = use ('Validator')
const User = use('App/Models/User')
const randomString= require('random-string') 


class RegisterController {
    showRegisterForm({view}){

return view.render('auth.register')
    }

    async register({request, session, response}){

        const validation = await validateAll(request.all(), {
            name: 'Campo Requerido|unique:users, nombree',
            username: 'Campo Requerido|unique:users,user',
            email: 'Campo Requerido|unique:users,email',
            password: 'Campo Requerido'


    })



        const user = await User.create({
            nombre: request.input('name'),
            usuario: request.input('username'),
            email: request.input('email'),
            password: request.input('password'),
            
        })
        return response.redirect('back')
    }
    }

module.exports = RegisterController
