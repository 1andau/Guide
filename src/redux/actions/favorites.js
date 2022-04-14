import axios from 'axios';






export const fetchRecom = (category) => (dispatch) => {
    console.log(category);
 
    dispatch({
       type: 'SET_RECOM_LOADED', 
       payload: false,
    });
 
 axios.get(`http://localhost:3002/recom?${category !== null ? `category=${category}` : ''}`).then(({data}) => {
    dispatch(setRecom(data));
       }); 
 };
 
 export const setRecom = (items) => ({ 
    type: 'SET_RECOM', 
    payload: items,
 });
 
 
 
 
 
 
 
 
 export const fetchUnusual = (category) => (dispatch) => {
    console.log(category);
 
    dispatch({
       type: 'SET_UNUSUAL_LOADED', 
       payload: false,
    });
 
    axios.get(`http://localhost:3002/unUsual?${category !== null ? `category=${category}` : ''}`).then(({data}) => {
       dispatch(setUnusual(data));
          }); 
    };
 
 export const setUnusual = (items) => ({ 
    type: 'SET_UNUSUAL', 
    payload: items,
 });
 
 