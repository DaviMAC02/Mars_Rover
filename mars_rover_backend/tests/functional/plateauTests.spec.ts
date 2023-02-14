import {test} from '@japa/runner'

test.group('Plateau', (group) => {
    
        let plateau_id: number = 1
    
        test('should insert one plateau instance', async ({client}) => {
            const response = await client.post('/plateau')
            .field('x_size', 5)
            .field('y_size', 5)
            response.assertStatus(201)
            plateau_id = response.body().id
            response.assertBodyContains({id: plateau_id})
        })
    
        test('should display the last plateau instance created', async ({client}) => {
            const response = await client.get('/plateau')
            response.assertStatus(200)
            response.assertBodyContains({id: plateau_id})
        })


    
    })