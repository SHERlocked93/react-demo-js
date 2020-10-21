const methods = {
    setTimuList: (state, action) => {
        return Object.assign({}, state, {
            timuList: action.timuList
        })
    }
}

export default methods
