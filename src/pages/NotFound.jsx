import React from 'react'
import {Link} from "react-router-dom"
const NotFound = () => {
  return (
    <div >
    <h2>Page not found ! </h2>
    <p>Eiusmod sit excepteur dolor commodo irure ea ipsum proident anim.</p>
    <p>Go to the <Link to ="/">HomePage</Link></p>
    </div>
  )
}

export default NotFound