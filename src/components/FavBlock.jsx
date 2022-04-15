import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from './Button';

//import classNames from 'classnames';


function CartBlock( {id, name, imageUrl, price,  personaСlickСomponents, addedCountFav, title, subtitle, liked = false, onFavorite}) {



const [like, setLike] =  React.useState(liked);
const onClickLike = () => {

  onFavorite({title, imageUrl, price, id, name })

  setLike(!like)
}
const [buttonPopup, setButtonPopup] = useState(false)

  return (

<div className = "recom-block">

<div className='d-flex flex-wrap'>
    <img 
src=  {  like ?  
    "/img/liked.png" : "/img/unLiked.png"}
onClick={onClickLike} 
className='icon' 
 />  
<img className="recom-block__image" src = {imageUrl} alt="guids"/>



  </div>


  
  
<div className="recom-block__price">  {name}</div>
<h5> {title}</h5>
<div className="recom-block__bottom">
   <div className="guids-block__price">{price}$</div>


<div className="modal">
  <main>
  <Button onClick={() => setButtonPopup(true)}>read more</Button>
  </main>

    <Modal trigger={buttonPopup}
    setTrigger = {setButtonPopup}>
      <br />  <br />
      <h1> <b>{price} $</b> </h1>
      {name}
    </Modal>


</div>
 

    </div>
    </div>
  )
}

export default CartBlock;

