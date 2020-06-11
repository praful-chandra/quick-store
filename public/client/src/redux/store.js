import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";
import rootReducer from "./reducer/rootReducer";

const middlewares = [thunk];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middlewares),
    //    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const persistor = persistStore(store);

export  {store,persistor};
