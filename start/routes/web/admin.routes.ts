import Route from '@ioc:Adonis/Core/Route'


Route.get('', 'DashboardController.index')
Route.get('login', 'AdminAuthController.view')
Route.post('login', 'AdminAuthController.login')

Route.resource('categories', 'CategoriesController')
Route.resource('products', 'ProductsController')
