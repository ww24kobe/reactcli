import React from 'react'
import "./index.scss" 
import "./index.css" 
import {
  Link,Route
} from "react-router-dom";
function A( props) {
  return (
    <div className="container">
    <Link to="/about">A-About</Link>
     <h1 > A组件 {props.title} </h1>
     {/* <Route exact path="/about">
          A-page-about
      </Route> */}
    </div>
  )
}

export default A