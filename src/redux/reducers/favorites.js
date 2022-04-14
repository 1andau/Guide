 
const initialState = {
    items: [],
isLoaded: false, //если загружен то отображаем пиццы 
};


const favorites = (state = initialState, action) =>{
switch (action.type) {
  

        case 'SET_RECOM':
            return{
                ...state,
                items: action.payload,
                isLoaded: true ,
            };

    

            case 'SET_UNUSUAL':
                return{
                    ...state,
                    items: action.payload,
                    isLoaded: true ,
                };


        case 'SET_LOADED':
            return{
                ...state,
                isLoaded: action.payload, 
            };

    default:
        return state
}
};


export default favorites;


