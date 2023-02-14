import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RoverLog from 'App/Models/RoverLog'

export const calculate_current_position = (instruction: string, inputed_position: string) => {
    const directions = ['N', 'E', 'S', 'W']
    const [x, y, direction] = inputed_position.split(' ')
    const instructions = instruction.split('')
    let directionIndex = directions.indexOf(direction)
    let currentX = parseInt(x)
    let currentY = parseInt(y)
    let current_direction = direction
    instructions.forEach((single_instruction) => {
        if (single_instruction === 'L') {
            if (directionIndex === 0) {
                current_direction = directions[directions.length - 1]
            }else {
                current_direction = directions[directionIndex - 1]
            }
        }
        
        if (single_instruction === 'R') {
            if (directionIndex === directions.length - 1) {
                current_direction = directions[0]
            }else {
                current_direction = directions[directionIndex + 1]
            }
        }

        if (single_instruction === 'M') {
            if (current_direction === 'N') {
                currentY += 1
            }
            if (current_direction === 'E') {
                currentX += 1
            }
            if (current_direction === 'S') {
                currentY -= 1
            }
            if (current_direction === 'W') {
                currentX -= 1
            }
        }

        directionIndex = directions.indexOf(current_direction)

    })

    return `${currentX} ${currentY} ${current_direction}`
}
        
export class RoverLogController {
    public static async index ({ response }: HttpContextContract) {
        const roverLogs = await RoverLog.all()
        return response.status(200).send(roverLogs)
    }

    public static async store ({ request, response }: HttpContextContract) {
        const { instruction, inputed_position, rover_id } = request.all()
        const current_position = calculate_current_position(instruction, inputed_position)
        const roverLog = await RoverLog.create({ instruction, inputed_position, current_position, rover_id })
        return response.status(200).send(roverLog)
    }

    public static async show ({ request, response }: HttpContextContract) {
        const roverLog = await RoverLog.findOrFail(request.param('id'))
        return response.status(200).send(roverLog)
    }


    public static async destroy ({ request, response }: HttpContextContract) {
        const roverLog = await RoverLog.findOrFail(request.param('id'))
        await roverLog.delete()
        return response.status(200).send(roverLog)
    }    
}

