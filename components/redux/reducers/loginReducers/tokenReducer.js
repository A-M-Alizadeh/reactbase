import Types from './../../actions/Types'

import {Actions} from 'react-native-router-flux'

const initialState = {
    jwtToken:null,
} ;

export default jwt=(state = initialState,action={})=>{
    switch (action.type) {
        case Types.SET_TOKEN:{
            const {payload}=action;
            if(payload === '.'){
                Actions.reset('auth');
            }
            return{
                jwtToken:payload
            }
            break;
        }

        default: return state;
            break;
    }
}