import { types } from "../components/types/types"

export const login = (uid,displayName)=>{
    
    return{
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}