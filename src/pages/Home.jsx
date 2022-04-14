import React from 'react';
import {Categories, SortPopup, CartBlock} from '../components';
import LoadingBlock from '../components/GuidsBlock/LoadingBlock';
import { useSelector, useDispatch } from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filters'

import {fetchGuids} from '../redux/actions/guids';
import NavBar from '../components/NavBar';
import { Header } from '../components';

const categoryNames = ['Tourist','Non-tourist', 'Specialty'];
const sortItems = [
  { name:'Popularity', type: 'popular', order: 'desc'},
  { name:'Price', type: 'price', order: 'desc'},
 ]


 function Home() {
const dispatch = useDispatch();
const items = useSelector(({guids})=> guids.items); 

const cartItems = useSelector(({cart})=> cart.items);

const isLoaded = useSelector(({guids})=> guids.isLoaded);

const {category, sortBy } = useSelector(({filters})=>filters );




  React.useEffect(() => {
    dispatch(fetchGuids(sortBy, category));
   }, [ category, sortBy]); 

   

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);


  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);


  const handleAddGuideToCart = (obj) => {
dispatch({
  type: 'ADD_GUIDE_CART', 
payload: obj,
});
};

return (
  <div className="content">

<div className="container">
      <NavBar/>
      <Header />

    <div className="content__top">


<Categories 
activeCategory = {category}
onClickCategory = {onSelectCategory}
items = {categoryNames}/>
{/* теперь делаем сортировку по категориям, для этого в SortPopup создаем массив  */}

<SortPopup
activeSortType = {sortBy}
 items = {sortItems} 
 onClickSortType = {onSelectSortType}/> 

    </div>
    <h2 className="content__title">All</h2>
    <div className="content__items">
     
{isLoaded
? items.map((obj) => ( 

<CartBlock onClickAddGuide = {handleAddGuideToCart}
 key={obj.id}
 addedCount={cartItems[obj.id] && cartItems[obj.id]. items.length}
 {...obj}
   />
   ))
  :Array(12)
  .fill(0)
  .map((_,index) => <LoadingBlock key ={index}/>)}


    </div>
  </div>
  </div>
    
  );
}




export default Home;
