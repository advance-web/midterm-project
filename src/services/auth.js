import request from '../libs/utils/axios'

const SIGN_IN_ENDPOINT = '/users/login'
const SIGN_UP_ENDPOINT = '/users/signup'
const GET_ME_ENDPOINT = '/users/me'
const LOG_OUT_ENDPOINT = '/users/logout'
const UDPATE_PROFILE_ENDPOINT = '/users/me'

export const signIn = (data) => {
    return request.post(SIGN_IN_ENDPOINT, data)
}

export const signUp = (data) => {
    return request.post(SIGN_UP_ENDPOINT, data)
}

export const getMe = () => {
    return request.get(GET_ME_ENDPOINT)
}

export const updateProfile = (data) => {
    return request.patch(UDPATE_PROFILE_ENDPOINT, data)
}

export const logOut = () => {
    return request.get(LOG_OUT_ENDPOINT)
}