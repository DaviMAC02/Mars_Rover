import { expect } from 'chai';
import {test} from '@japa/runner'


import {calculate_current_position} from 'App/Controllers/Http/RoverLogController'

test('calculate current position', () => {
    const instruction = 'LMLMLMLMM'
    const inputed_position = '1 2 N'
    const current_position = calculate_current_position(instruction, inputed_position)
    expect(current_position).to.equal('1 3 N')
})