import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rover from 'App/Models/Rover'

export default class RoverController {
    public static async index ({ response }: HttpContextContract) {
        const rovers = await Rover.all()
        return response.json(rovers)
    }
    
    public static async store ({ response }: HttpContextContract) {
        const lastRoverId = await Rover.query().orderBy('id', 'desc').first()
        if(lastRoverId){
            const rover = await Rover.create({id: lastRoverId?.id + 1})
            return response.json(rover)
        }else{
            const rover = await Rover.create({id: 1})
            return response.json(rover)
        }
        
    }
    
    public static async show ({ params, response }: HttpContextContract) {
        const rover = await Rover.find(params.id)
        return response.json(rover)
    }
    
    public static async destroy ({ params, response }: HttpContextContract) {
        const rover = await Rover.find(params.id)
        await rover?.delete()
        return response.json(rover)
    }
    }