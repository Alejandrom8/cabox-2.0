import { LOADING, LOGIN_ERROR, LOGIN_SUCCESS, UPDATE_TOKEN } from "../types";

const INITIAL_STATE = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

//TODO: agregar tokenInterval al estado
function authReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case LOADING:
            return {
                ...state,
                loading: payload
            };
        case LOGIN_SUCCESS:
            //save refresh token
            window.localStorage.setItem('refreshToken', payload.refreshToken);
            return {
                ...state,
                user: payload.user,
                token: payload.token,
            }
        case LOGIN_ERROR:
            window.localStorage.removeItem('refreshToken');
            return {
                ...state,
                user: null,
                error: payload.error
            }
        case UPDATE_TOKEN:
            return {
                ...state,
                token: payload.token,
                user: payload.user,
            }
        default: return state;
    }
}

export default authReducer;