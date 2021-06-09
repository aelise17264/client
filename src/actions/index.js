import {AUTH_USER, AUTH_ERROR} from './types';
import axios from 'axios';
//redux thunk allows us to return a diff value type from our action creators
//we can return an action object or a function
//if we return a function it will be automatically called w/ a dispatch function
//Redux promise has to return a promise, thunk we can return whatever we want
    
export const signup = (formProps, cb) => async dispatch => {
    try{
    const response = await axios.post('http://localhost:4000/signup', formProps);

    dispatch({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    cb();

    }catch(err){
        dispatch({type: AUTH_ERROR, payload: 'This email already exists'})
    }
};
