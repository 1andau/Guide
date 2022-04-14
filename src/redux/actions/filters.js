export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
  });
  
  export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
  });



  export const setCategoryRecom = (catIndex) => ({
    type: 'SET_CATEGORY_RECOM',
    payload: catIndex,
  });
  

  export const setCategoryUnusual = (catIndex) => ({
    type: 'SET_CATEGORY_UNUSUAL',
    payload: catIndex,
  });
  