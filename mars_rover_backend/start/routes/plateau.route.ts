import Route from '@ioc:Adonis/Core/Route'
import PlateauController from 'App/Controllers/Http/PlateauController'

Route.get('/plateau', PlateauController.get_last)
Route.post('/plateau', PlateauController.store)