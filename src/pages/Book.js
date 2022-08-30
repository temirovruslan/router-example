import React from 'react'
import {useParams} from 'react-router-dom'
import './Style.css'

function Book() {
   const {id} =  useParams()
   console.log(id);

  return (
    <h1>Book {id}</h1>
  )
}

export default Book