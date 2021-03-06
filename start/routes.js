'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Welcome to TuristandoPB-API | Version: v1.0.0' }
})

Route.post('/users', 'UserController.create')

Route.post('/sessions', 'SessionController.create')

Route.get('/atrativosAll', 'AtrativoController.indexALL')


Route.resource('atrativo', 'AtrativoController')
  .apiOnly()
;

Route.post('atrativo/:id/imagens', 'ImagenController.store')

Route.get('images/:path', 'ImagenController.show')


