import Types from './../../actions/Types'

const initialState = {
    username:null,
    specialities:[null],
} ;

export default userDataReducer=(state = initialState,action={})=>{
    switch (action.type) {
        case Types.SET_USER_DATA:{
            const {payload}=action;
            return{
                username:payload.username,
                specialities:payload.specialities,
            }
            break;
        }

        default: return state;
            break;
    }
}