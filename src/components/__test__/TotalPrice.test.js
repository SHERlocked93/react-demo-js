import React from 'react'
import { shallow } from 'enzyme'
import TotalPrice from '../TotalPrice'

const props = {
    income: 1000,
    outcome: 2000
}

describe('test totalprice', () => {
    it('应该渲染数值', () => {
        const wrapper = shallow(<TotalPrice { ...props }/>)
        expect(wrapper.find('.income span').text() * 1).toEqual(1000)
        expect(wrapper.find('.outcome span').text() * 1).toEqual(2000)
    })
})
