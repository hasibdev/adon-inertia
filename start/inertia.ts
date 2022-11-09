/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
  errors: (ctx) => ctx.session.flashMessages.get('errors'),
  params: (ctx) => ctx.request.params(),
  auth: (ctx) => ctx.auth
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))
