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
        case types.notesAddNew:
            return {
                ...state,
                notes:[action.payload,...state.notes]
            }
        case types.notesLoad:
            return{
                ...state,
                notes:[...action.payload]
            }
        case types.notesUpdated:
            return{
                ...state,
                notes:state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
            }   
        case types.notesDelete:{
            return {
                ...state,
                notes:state.notes.filter((note)=>note.id !==action.payload ? note : null),
                active:null
            }
        }
        case types.notesLogout:
            return {
                ...state,
                notes: [],
                active: null,
            }
        default:
            return state
    }
};
