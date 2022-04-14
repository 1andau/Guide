import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {  LeftBar } from "../components";
import LogOutPage from "../components/LogOutItems";

function LogOut() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.items);


  return (

    <div className="">
      <h1>fdhdjxkzlkjhgfds</h1>
          <LogOutPage
            isLoaded={true}
            {...user}
          />

      {/* <Header/> */}

        </div>
    
  
  );
}

export default LogOut;
