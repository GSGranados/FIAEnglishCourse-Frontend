import {
    LOG_IN,
    LOG_OUT
} from '../types';

export const logInAction = (user) =>{
    return {
        type:LOG_IN,
        payload:user
    }
}

export const logOutAction = () =>{
    return{
        type: LOG_OUT
    }
}