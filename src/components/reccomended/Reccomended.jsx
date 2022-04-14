import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Categories from '../Categories';
import {setCategory} from '../../redux/actions/filters'
import FavBlock from '../FavBlock';
import { fetchRecom } from '../../redux/actions/favorites';
import NavBar from '../NavBar';
import Header from '../Header';
const categoryNames = ['restaurants','entertainment', 'places'];

 function Reccomended  ()  {

  const dispatch = useDispatch();
 const [value, setValues] = React.useState(''); //search
  const {category } = useSelector(({filters})=>filters ); //category
  const items = useSelector(({favorites})=> favorites.items); //map

  const cartItems = useSelector(({favCart})=> favCart.items); //state 

   React.useEffect(() => {
dispatch(fetchRecom());
 }, []);



React.useEffect(() => {
  dispatch(fetchRecom( category));
 }, [ category]); 



const onSelectCategory = React.useCallback((index) => {
  dispatch(setCategory(index));
}, []);


const handleAddFavoritesToCart = (obj) => {
  dispatch({
    type: 'ADD_FAVORITES_TO_CART', 
  payload: obj,
  });
  };






   return (
     
    <div className='container'>

<NavBar/>
<Header />

<Categories 
activeCategory = {category}
onClickCategory = {onSelectCategory}
items = {categoryNames}/>
<div className="searchContainer">
    <div className="form">
        <input type="text" id="search" placeholder="Seach..."
          value={value}
          onChange={(event) => setValues(event.target.value)
          }
        ></input>
        <button id="button">Search</button>


</div>

</div> 



{items
.filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))

.map((obj) => (

<div key={obj.id} className="recom-block">

<FavBlock
onFavorite = {handleAddFavoritesToCart}
             key={obj.id}
             addedCountFav={cartItems[obj.id] && cartItems[obj.id]. items.length}

             {...obj}
              />




<div className="recom-block__bottom">
   
    </div>
    </div> 
))
};
</div>
   )
 }


export default Reccomended

