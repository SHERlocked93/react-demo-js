// 设置题目列表
const SetTimuList = 'SetTimuList'

const methods = {
    [SetTimuList]: (state, action) => {
        return Object.assign({}, state, {
            timuList: action.timuList
        })
    }
}

export default methods
export { SetTimuList }
