import Route from '@ioc:Adonis/Core/Route'
import Category from 'App/Models/Category'

// Public Routes
Route.get('/', ({ inertia }) => {
  return inertia.render('Home')
})
Route.get('/about', async ({ inertia }) => {
  const data = Category.all()
  return inertia.render('About', { data })
})

// Auth
Route.get('/login', 'UserAuthController.viewLogin')
Route.post('/login', 'UserAuthController.login')
Route.get('/register', 'UserAuthController.viewRegister')
Route.post('/register', 'UserAuthController.register')
