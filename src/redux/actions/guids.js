import axios from 'axios';

export const fetchGuids = (sortBy, category) => (dispatch) => {
   console.log(category, sortBy );

   dispatch({
      type: 'SET_LOADED',
      payload: false,    
});

   axios.get(`http://localhost:3002/guids?${category !==null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
dispatch(setGuids(data));
   });  
};


export const setGuids = (items) => ({ 
   type: 'SET_GUIDS', 
   payload: items, 
});





