import  { combineReducers } from 'redux';

import filters from './filters';
import guids from './guids';
import cart from './cart';
import favCart from './favCart';
import favorites from './favorites'
import userReducer from './user';

const rootReducer = combineReducers({
    filters,
    guids,
    cart,
    favCart,
    favorites, 
    user: userReducer,

  });

  export default rootReducer;