import { createStore } from 'redux'
import methods from './methods'
import data from './state'

const reducer = (state = data, action) => {
    if (action.type in methods) {
        return methods[action.type](state, action)
    } else
        return state
}

export default createStore(reducer)
