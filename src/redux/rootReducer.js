import  { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //gets local storage

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from '../redux/directory/directoryReducer';
import shopReducer from '../redux/shop/shopReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart'] // only thing to whitelist is the cart reducer below - user reducer persistance is handled by firebase
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);