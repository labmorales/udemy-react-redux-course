import {combineReducers} from 'redux';

// STATIC REDUCER TO FIX SOME MOCKED DATA
const songsListReducer = () => {
    return [
        {
            title: 'Blinding Lights',
            duration: '4:15'
        },
        {
            title: 'Circles',
            duration: '3:30'
        },
        {
            title: 'Memories',
            duration: '3:45'
        },
        {
            title: 'All of me',
            duration: '4:30'
        },
        {
            title: 'Yesterday',
            duration: '2:55'
        },
    ];
}

const songSelectedReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsListReducer,
    selectedSong: songSelectedReducer
});