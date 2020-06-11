import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import subNavReducer from "./subNav.reducer";
import productsReducer from "./products.reducer";
import categoryReducer from "./category.reducer";
import campaignReducer from "./campaign.reducer";
import saleReducer from "./sale.reducer";
import cartReducer from "./cart.reducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist :['cart','subNav']
}

const rootReducer = combineReducers({

    subNav : subNavReducer,
    products : productsReducer,
    category : categoryReducer,
    campaign : campaignReducer,
    sale : saleReducer,
    cart : cartReducer
});


export default persistReducer(persistConfig,rootReducer);