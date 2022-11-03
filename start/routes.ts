import Route from '@ioc:Adonis/Core/Route'

// Api Routes
Route.group(async () => {
   await require('./routes/api/api')
}).prefix('api')


// Admin Routes
Route.group(async () => {
   await require('./routes/web/admin.routes')
}).prefix('admin')

// Public routes
import './routes/web/public.routes'