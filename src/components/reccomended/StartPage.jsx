import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import NavBar from '../NavBar'
import Header from '../Header'
const ImpressionPage = () => {
  return (
   <div className="container">
          <NavBar/>
          <Header />
          <div className="open-me">

<h2>Still have not decided?</h2>
<p>Great!</p>

<Link  to= "/Reccomended" >  
<Button 
 className="button-two" to="/Reccomended">
   <span>I recommend</span>
</Button>
</Link>
</div>

   </div>

  )
}

export default ImpressionPage