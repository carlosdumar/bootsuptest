import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from './middleware/logger'
import rootReducer from "./rootReducer";

export default function configureStoreApp(preloadedState: Record<string, undefined>): any {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware, thunkMiddleware],
        preloadedState,
        enhancers: [monitorReducerEnhancer]
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
    }

    return store
}