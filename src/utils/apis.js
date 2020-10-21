import fetch from './fetch'

export const getTimu = ({ page } = {}) => fetch({
    url: '/api/rtimu/',
    params: { page }
})

export const testConnect = () => fetch({
    url: '/'
})
