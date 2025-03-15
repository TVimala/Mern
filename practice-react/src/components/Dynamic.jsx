import React from 'react'
import { useState } from 'react'
function Dynamic() {
    const [txt,settxt]=useState("")
    const onTextChange=(e)=>{
        settxt(e.target.value)
    }
  return (
    <div>
        <h1>Dynamic</h1>
        <input type="text" value={txt} onChange={onTextChange}/>
        <h2>{txt}</h2>
    </div>
  )
}

export default Dynamic