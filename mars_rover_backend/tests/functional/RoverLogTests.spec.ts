import {test} from '@japa/runner'

test.group('RoverLog', (group) => {

    let logId: number = 1

    test('should insert one log instance and return the correct position and direction', async ({client}) => {
        const response = await client.post('/roverLog')
        .field('instruction', "MRRMMRMRRM")
        .field('inputed_position', "3 3 E")
        logId = response.body().id
        response.assertStatus(200)
        response.assertBodyContains({current_position: "2 3 S"})
    })

    test('should display all log instances', async ({client}) => {
        const response = await client.get('/roverLog')
        response.assertStatus(200)
        response.assertBodyContains([{id: logId}])
    })

    test('should display one specific log instance', async ({client}) => {
        const response = await client.get(`/roverLog/${logId}`)
        response.assertStatus(200)
        response.assertBodyContains({id: logId})
    })

    test('should delete one specific log instance', async ({client}) => {
        const response = await client.delete(`/roverLog/${logId}`)
        response.assertStatus(200)
        response.assertBodyContains({id: logId})
    })


})