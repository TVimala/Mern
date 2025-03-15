import React from 'react'

function Calculator(props) {
  return (
    <div>
      <h2>{props.a + props.b}</h2>
      <h2>{props.a-props.b}</h2>
      <h2>{props.a*props.b}</h2>
      <h2>{props.a/props.b}</h2>
    </div>
  )
}

export default Calculator