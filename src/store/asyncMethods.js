import * as Api from '../utils/apis'

export const getTimuList = params => {
    return Api.getTimu({ ...params })
}
