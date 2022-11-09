import Route from '@ioc:Adonis/Core/Route'



Route.get('login', 'AdminAuthController.view')
Route.post('login', 'AdminAuthController.login')

Route.group(() => {
  Route.get('', 'DashboardController.index')
  Route.resource('categories', 'CategoriesController')
  Route.resource('products', 'ProductsController')

  Route.post('logout', 'AdminAuthController.logout')
}).middleware('auth:admin')
