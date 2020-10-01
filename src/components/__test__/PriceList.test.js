import React from 'react'
import { shallow } from 'enzyme'
import PriceList from '../PriceList'

import { items, catagorys } from '../../containers/Home'

const itemsWithCatagory = items.map(T => {
    T.catagory = catagorys[T.cid]
    return T
})

const props = {
    items: itemsWithCatagory,
    onModifyItem: () => {},
    onDeleteItem: () => {}
}
let wrapper
describe('test pricelist components', () => {
    beforeEach(() => {
        wrapper = shallow(<PriceList { ...props }/>)
    })
    it('should render the component to match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
