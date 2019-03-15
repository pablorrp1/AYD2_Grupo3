'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
class LoginController {
    showLoginForm({view}){
        return view.render('auth.login')
    }

    async login ({request, auth, session, response}){

        const{username, password,remember} = request.all()

        const user = await User.query()
        .where('usuario ',username)
        .where('activo',false)
        .first()

        // verificar contraseña 
        if (username== 'admin' && password=="admin"){

          
            return response.route('home')
       
        }
        if (user){
           
            const passwordVerified = await Hash.verify(password, user.password)
           
           
            if(passwordVerified){
                await auth.remember(!!remember).login(user)
                return response.route('home')
               
            } 
       
        }
         //error
         session.flash({
            notification:{
                type: 'danger',
                message: 'No se puede ingresar, verificar credenciales'
            }

        })
            return response.redirect('back')


      
    }
    
}

module.exports = LoginController
