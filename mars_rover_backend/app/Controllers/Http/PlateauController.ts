import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Plateau from 'App/Models/Plateau'

export default class PlateauController {
    public static async store ({ request, response }: HttpContextContract) {
        const { x_size, y_size } = request.all()
        const plateau = await Plateau.create({ x_size, y_size })
        return response.status(201).send(plateau)
    }

    public static async get_last ({ response }: HttpContextContract) {
        const plateau = await Plateau.query().orderBy('id', 'desc').first()
        return response.status(200).send(plateau)
    }
}