import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comments/getComments';
const SET_COMMENT = 'comments/setComment';
const DELETE_COMMENT = 'comments/deleteComment';
// actions
const getComments = (data) =>{
    return{
        type:GET_COMMENTS,
        data
    }
}
const setComment = (data) =>{
    return{
        type: SET_COMMENT,
        data
    }
}
const deleteComment = (data) =>{
    return {
        type: DELETE_COMMENT,
        data
    }
}

// thunk functions



const initialState = {comments:{}}

const commentReducer = (state = initialState, action) =>{
    let newState;
    switch(action.type){
        case GET_COMMENTS:
            newState = {...state}
            newState.comments = action.payload
            return newState;
        case SET_COMMENT:
            newState = {...state}
            newState.comments = action.payload
            return newState
        case DELETE_COMMENT:
            newState = {...state}
            newState.comments = action.payload
            return newState
        default:
            return state;
    }
}

export default commentReducer;
