import { csrfFetch } from "./csrf";

const SET_SONG = 'songs/setSong';
const REMOVE_SONG = 'songs/removeSong';
const GET_SONG = 'songs/getSong';

const getSong = (data) =>{
    return {
        type: GET_SONG,
        payload: data
    }
}

const setSong = (song) =>{
    return {
        type: SET_SONG,
        payload: song,
    }
}

const removeSong = (songId) =>{
    return {
        type: REMOVE_SONG,
        songId
    };
};

// redux thunk actions

export const getAllSongs = () => async dispatch =>{
    const res = await csrfFetch('/api/songs')

    const songsList = await res.json();

    dispatch(getSong(songsList));
}

// initial state

const initialState = {songs:[]};

const songReducer = (state= initialState, action) =>{
    let newState;
    switch(action.type){
        case GET_SONG:
            newState = {...state};
            newState.songs = action.payload
            return newState;
        case SET_SONG:
            newState= Object.assign({}, state);
            newState.song = action.payload;
            return newState;
        case REMOVE_SONG:
            newState = Object.assign({}, state);
            newState.song = null;
            return newState;
        default:
            return state;
    }
}

export default songReducer;
