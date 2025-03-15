import React from 'react'
import { createContext } from 'react'
export const ThemeContext=React.createContext()
export const ThemeProvider=({children})=>{
    const [theme,settheme]=React.useState('light')
    const toggletheme=()=>{
        settheme((prevtheme)=>prevtheme==='light'?'dark':'light')
    }
    return (
        <ThemeContext.Provider value={{theme,toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext