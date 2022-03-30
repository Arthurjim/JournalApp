import { types } from "../components/types/types";

/**
    {
        notes[],
        active:null,
        active:{
            id:'26asdf62',
            title:'',
            body:'',
            imageUrl:'',
            date:123124
        }
    }

 */
const initialState = {
    notes: [],
    active: null,
};
export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  types.notesActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.notesLoad:
            return{
                ...state,
                notes:[...action.payload]
            }
        default:
            return state
    }
};
