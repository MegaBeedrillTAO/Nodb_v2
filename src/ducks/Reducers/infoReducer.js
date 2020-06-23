import Axios from 'axios';

const initialState = {
    class: "",
    subclass: "",
    race: "",
    subrace: "",
    statMods: "",
    gender: "",
    background: "",
    stats: {}
}

const GET_CHAR = 'GET_CHAR'

export function get_char(charOptions){
    return{
        type: GET_CHAR,
        payload: Axios.put('/api/makeCharacter', charOptions)
    }
}

export default function reducer(state = initialState, action){
    const {payload, type} = action;
    switch(type){
        case `${GET_CHAR}_FULFILLED`:
            return {
                ...state,
                class: payload.sentClass,
                subclass: payload.sentSubClass,
                race: payload.sentRace,
                subrace: payload.sentSubRace,
                statMods: payload.sentStatMods,
                gender: payload.sentGender,
                background: payload.sentBackground,
                stats: {...payload.sentStats}
            }
        default: return state
    }

}