import {test} from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('Rover', (group) => {
    let rover_id: number = 1

    test('should insert one rover instance', async ({client}) => {
        const response = await client.post('/rover')
        response.assertStatus(200)
        rover_id = response.body().id
        response.assertBodyContains({id: rover_id})
        
    })

    test('should display all rover instances', async ({client}) => {
        const response = await client.get('/rover')
        response.assertStatus(200)
        response.assertBodyContains([{id: rover_id}])
    })

    test('should display one specific rover instance', async ({client}) => {
        const response = await client.get(`/rover/${rover_id}`)
        response.assertStatus(200)
        response.assertBodyContains({id: rover_id})
    })

    test('should delete one specific rover instance', async ({client}) => {
        const response = await client.delete(`/rover/${rover_id}`)
        response.assertStatus(200)
        response.assertBodyContains({id: response.body().id})
    })
})

