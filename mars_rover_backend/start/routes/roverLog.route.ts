import Route from '@ioc:Adonis/Core/Route'
import {RoverLogController} from 'App/Controllers/Http/RoverLogController'

Route.get('/roverLog', RoverLogController.index)

Route.get('/roverLog/:id', RoverLogController.show)

Route.post('/roverLog', RoverLogController.store)

Route.delete('/roverLog/:id', RoverLogController.destroy)