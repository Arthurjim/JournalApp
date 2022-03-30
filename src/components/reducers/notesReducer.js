import { types } from "../types/types";

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
        case 'types.adf':
            return state
            break;

        default:
            return state
            break;
    }
};
