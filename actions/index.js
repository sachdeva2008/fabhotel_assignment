import axios from 'axios'
import { actionTypes } from './types';
import {API_END_POINT} from '../config/config'

export const getPosts = (subreditName) => {
  //return { type: actionTypes.POSTS, payload:[1,2,3,4,5,6]}
  return (dispatch) => {    
    dispatch({ type: actionTypes.POSTS, payload: []})   
    return axios.get(API_END_POINT(subreditName))
        .then( ({data:{data:{children: posts=[]}={}}={}}={}) => {                     
            dispatch({ type: actionTypes.POSTS, payload: posts})
         })
        .catch( error =>{
       
        })                 
  }
}