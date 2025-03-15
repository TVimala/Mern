import React from 'react'
import { useState } from 'react'
import { ThemeContext } from './Themecontext'
function Themeswitcher() {
    const {theme,toggletheme}=React.useContext(ThemeContext);
  return (
    <div>
        <div style={{backgroundColor:theme==='light'?'yellow':'blue',color:theme==='light'?'black':'white'}}>
        <h1>Current theme:{theme}</h1>
        <button onClick={toggletheme}>Toggle Theme</button>
        </div>
    </div>
  )
}
export default Themeswitcher