import React from 'react';
import { Route } from "react-router-dom";

import {Home, Cart} from './pages';
import {  UnusualPage, ImpressionPage,  Reccomended } from './components';
import Wishlist from './pages/Wishlist'
import Signin from './auth/Signin';
import Main from './pages/Main';

function App() {

  return (
<div className="wrapper">
{/* <div className="content"> */}

<Route exact path="/" component={Main}></Route>

<Route exact path="/home" component={Home}></Route>
<Route exact path="/cart" component={Cart}></Route>
<Route exact path="/signin" component={Signin}></Route>
<Route exact path="/impressionPage" component={ImpressionPage}></Route>
<Route exact path="/Reccomended" component={Reccomended}></Route>
<Route exact path="/UnusualPage" component={UnusualPage}></Route>
<Route exact path="/Wishlist" component={Wishlist}></Route>


      </div>
    // </div>
  );
}

export default App;

