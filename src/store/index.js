import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer } from './reducers/todosReducer';
import { dataProcessingReducer } from './reducers/dataProcessing';


const rootReducer = combineReducers({
  todos: todosReducer,
  isDataProcessing: dataProcessingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);