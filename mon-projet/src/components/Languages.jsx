import {useState} from 'react'
import html from '../assets/images/logo-html5.png'
import css from '../assets/images/logo-css.png'
import js from '../assets/images/logo-js.png'
import python from '../assets/images/python.png'

const Languages = () => {
 

  return (
  <>
    <h1>Les langages</h1>  
    <img src={html} alt="HTML" />
    <img src={css} alt="css" />
    <img src={js} alt="js" />
    <img src={python} alt="python" />


  </>


  )
}

export default Languages