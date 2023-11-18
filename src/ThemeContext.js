import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

export default function ThemeContext(props) {


    const [dark, setdark] = useState(JSON.parse(localStorage.getItem('dark')) ? JSON.parse(localStorage.getItem('dark')) : false);
    
    
    useEffect(() => {
        console.log(language)
    }, [])
    
    
    const changemode = () => {
        if (dark) {
            setdark(false)
            localStorage.setItem('dark', JSON.stringify(false))
            document.getElementById('body').style.backgroundColor = 'white'
            document.getElementById('sidebar').style.backgroundColor = 'white'
            document.getElementById('header').style.backgroundColor = 'white'
            document.getElementById('body').style.color = 'black'
    
        } else {
            setdark(true)
            localStorage.setItem('dark', JSON.stringify(true))
            document.getElementById('body').style.backgroundColor = '#23272f'
            document.getElementById('sidebar').style.backgroundColor = '#191b21'
            document.getElementById('header').style.backgroundColor = '#191b21'
            document.getElementById('body').style.color = 'white'
    
        }
    }
    
    return (
        <>
            <Context.Provider value={{ changemode, dark }}>
                {props.children}
            </Context.Provider>
        </>
    )
}