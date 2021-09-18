import {combineReducers} from 'redux'

const songListReducer = () => {
    return ([
        {title: 'Bad Guy', duration: '4:00'},
        {title: 'Everything I wanted', duration: '4:34'},
        {title: 'Before I Go', duration: '4:28'},
        {title: 'Curious', duration: '4:43'},
        {title: 'What I want', duration: '3:54'},
        {title: 'Demons', duration: '5:20'}
    ])
}

const songSelectingReducer = (songSelected = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload; // automatically sets songSelected as action.payload
    }
    return songSelected; // won't change songSelected
}

export default combineReducers({
    songs: songListReducer,
    selectedSong: songSelectingReducer
})