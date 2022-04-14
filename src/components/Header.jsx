import React from 'react';
import Button from './Button';
 import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';



function Header(){
  const { totalCount } = useSelector(({cart}) => cart);
  const { totalCountFav } = useSelector(({favCart}) => favCart);

    return(
      
      <div className="container">

        <div className="header">
          


   {/* <NavBar/> */}

 <div className="header__cart">

 <Link to="/cart">
<Button className="button--cart">
<span> <i>✈️</i> {totalCount}</span>
</Button>
</Link>


 <Link to="/wishlist">
<Button className="button--wishlist">
<span> <i> ❤️ </i>{totalCountFav} </span>
</Button>
</Link>

 </div>
 

        </div>
      </div>

    )
}
export default Header;