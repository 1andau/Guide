export const addFavoritesToCart = (FavoritesObj) => ({
    type: 'ADD_FAVORITES_TO_CART', 
    payload: FavoritesObj,
});
export const clearFavorites = () => ({
    type: 'CLEAR_CART_FAVORITES', 
    });

    export const removeFavorites = (id) => ({
        type: 'REMOVE_CART_FAVORITES', 
        payload: id,
        });  