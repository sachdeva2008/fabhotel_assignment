import { actionTypes } from '../../actions/types';
import {initialState} from '../initialState'

const Main = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.POSTS:
        return { ...state, posts: action.payload}
        default:
          return state;
      }
}
export default Main;