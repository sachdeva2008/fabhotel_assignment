import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/root'
import {initialState} from './reducers/initialState'


export function initializeStore (InitialState = initialState) {
  return createStore(
    rootReducer,
    InitialState,
    composeWithDevTools(applyMiddleware(reduxThunk))
  )
}
