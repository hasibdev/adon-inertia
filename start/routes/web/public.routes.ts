import Route from '@ioc:Adonis/Core/Route'

// Public Routes
Route.get('/', ({ inertia }) => {
  return inertia.render('Home')
})
Route.get('/about', async ({ inertia }) => {
  return inertia.render('About')
})

// Auth
Route.get('/login', 'UserAuthController.viewLogin')
Route.post('/login', 'UserAuthController.login')
Route.get('/register', 'UserAuthController.viewRegister')
Route.post('/register', 'UserAuthController.register')
