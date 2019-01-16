import Types from './../../actions/Types'

const initialState = {
    id:null,
    itemInList:null,
} ;

export default defaultSpecReducer=(state = initialState,action={})=>{
    switch (action.type) {
        case Types.SET_Def_SPEC:{
            const {payload}=action;
            return{
                id:payload.id,
                itemInList:payload.itemInList,
            }
            break;
        }

        default: return state;
            break;
    }
}