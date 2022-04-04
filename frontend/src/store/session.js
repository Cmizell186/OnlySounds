import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};


// Redux-thunk actions
export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const request = {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    }
    const response = await csrfFetch('/api/session', request);
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const request = {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password,
        })
    }
    const response = await csrfFetch("/api/users", request);

    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const logout = () => async dispatch =>{
    const response = await csrfFetch('/api/session', {
        method: "DELETE",
    });
    dispatch(removeUser());
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
