import { csrfFetch } from "./csrf";

const SET_SONG = 'songs/setSong';
const REMOVE_SONG = 'songs/removeSong';
const GET_SONG = 'songs/getSong';
const GET_SONGS = 'songs/getSongs';
const PLAY_SONG = 'songs/playSong';

const getSongs = (data) =>{
    return {
        type: GET_SONGS,
        payload:data
    }
}

const getSong = (data) => {
    return {
        type: GET_SONG,
        payload: data
    }
}

const setSong = (song) => {
    return {
        type: SET_SONG,
        payload: song,
    }
}

const removeSong = (songId) => {
    return {
        type: REMOVE_SONG,
        songId
    };
};

const playSong = (songId) =>{
    return {
        type: PLAY_SONG,
        payload: songId
    }
}

export const playingSong = (id) => async dispatch => {
    const response = await csrfFetch(`/api/songs/${id}`);

    const song = await response.json();
    dispatch(playSong(song));
    return song;
}

// redux thunk actions

export const getAllSongs = () => async dispatch => {
    const res = await csrfFetch('/api/songs')

    const songsList = await res.json();

    dispatch(getSongs(songsList));
}

export const getSpecificSong = (id) => async dispatch =>{
    const response = await csrfFetch(`/api/songs/${id}`);

    const song = await response.json();
    dispatch(getSong(song));
    return song;
}

export const createNewSong = (newSong) => async dispatch => {
    const request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSong)
    }
    const response = await csrfFetch(`/api/songs`, request);

    const song = await response.json();
    dispatch(setSong(song))
    return song;
}

export const deleteSpecificSong = (id) => async dispatch =>{
    const request = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    }
    const response = await csrfFetch(`/api/songs/${id}`, request)

    const deleteSong = await response.json();
    dispatch(removeSong(deleteSong))
}
// initial state

const initialState = { songs: [], currentSong:{}, playingSong:{}};

const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONG:
            newState = { ...state };
            newState.currentSong = action.payload;
            return newState;
        case GET_SONGS:
            newState = {...state};
            newState.songs = action.payload;
            return newState;
        case SET_SONG:
            newState = {...state}
            newState.songs = action.payload;
            return newState;
        case REMOVE_SONG:
            newState = {...state};
            newState.songs = action.payload;
            return newState;
        case PLAY_SONG:
            newState = {...state};
            newState.playingSong = action.payload;
            return newState;
        default:
            return state;
    }
}

export default songReducer;
