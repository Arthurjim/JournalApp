import { types } from "../components/types/types"

export const startLoginEmailPassword = (email,password)=>{
    return(dispatch)=>{//dispatch lo obtenemos gracias a thunk
        setTimeout(()=>{
            dispatch(login(email, password));
        },3500)
    }
}

export const login = (uid,displayName)=>{
    
    return{
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}