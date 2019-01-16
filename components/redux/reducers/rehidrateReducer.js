import Types from './../actions/Types'

export default rehidrated = (state=false,action)=>{
    switch(action.type){
        case Types.SET_PERSIST:{
            return true;
            break;
        }
        default : return state;
    }
}