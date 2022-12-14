import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

const defaultExport = { store, persistor };

export default defaultExport;
