import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./sagas/index";

const initialState = {};
const logger = createLogger();
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
