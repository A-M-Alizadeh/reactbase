import {createStore,applyMiddleware,compose} from 'redux'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducers from './../reducers'
import { persistStore,persistReducer } from 'redux-persist';
import Types from './../actions/Types'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}

const middleWare = [thunk];
middleWare.push(createLogger());


// const jwtUpdater = (store)=>(next)=>(action)=>{
//     console.log('middleware ware ware');
//     if(action.type === Types.SET_PERSIST){
//         console.log('Auth Middlleeeeeeeee');
//     }
//     next(action);
// }
// middleWare.push(jwtUpdater);

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = createStore(
    persistedReducer,
    undefined,
    compose(
        applyMiddleware(...middleWare),
    )
);

export const persistor = persistStore(store);