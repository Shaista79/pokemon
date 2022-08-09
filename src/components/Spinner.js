import React from 'react'
import loading from "./loading.gif";

export default function spinner() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"30px 0px"}}>
    <img src={loading} alt="loading" />
   </div>
  )
}

