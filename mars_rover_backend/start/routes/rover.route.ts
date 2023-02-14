import Route from '@ioc:Adonis/Core/Route'
import RoverController from 'App/Controllers/Http/RoverController'

Route.get('/rover', RoverController.index)
Route.post('/rover', RoverController.store)
Route.get('/rover/:id', RoverController.show)
Route.delete('/rover/:id', RoverController.destroy)

