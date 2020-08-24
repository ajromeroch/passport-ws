import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // nos permite despachar funciones
    loggerMiddleware // buen middleware que registra las acciones
  )
);

export default store;
