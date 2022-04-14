const initialState = {
    items: {},
    totalPriceFav: 0,
    totalCountFav: 0,
  };
  const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

  const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };
  
  const getGrandTotal = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
    }, 0);
  };
  
    
  const favCart = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITES_TO_CART': {
        const currentGuideItems = !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload];
  
        const newItems = {
          ...state.items,
          [action.payload.id]: {
            items: currentGuideItems,
            totalPriceFav: getTotalPrice(currentGuideItems),
          },
        };
  
        const totalCountFav = getGrandTotal(newItems, 'items.length');
        const totalPriceFav = getGrandTotal(newItems, 'totalPriceFav');
  
        return {
          ...state,
          items: newItems,
          totalCountFav,
          totalPriceFav,
        };
      }

  
      case 'REMOVE_CART_FAVORITES': {
        const newItems = {
          ...state.items,
        };
        const currentTotalPriceFav = newItems[action.payload].totalPriceFav;
        const currentTotalCountFav = newItems[action.payload].items.length;
        delete newItems[action.payload];
        return {
          ...state,
          items: newItems,
          totalPriceFav: state.totalPriceFav - currentTotalPriceFav,
          totalCountFav: state.totalCountFav - currentTotalCountFav,
        };
      }

  
        case 'CLEAR_CART_FAVORITES':
          return { totalPriceFav: 0, totalCountFav: 0, items: {} };


      default:
        return state;
    }
  };

  export default favCart;