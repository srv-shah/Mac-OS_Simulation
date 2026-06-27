import React from 'react'
import { Rnd } from 'react-rnd'
import "./macWindow.scss"

const MacWindow = ({children, width = "40vw", height = "40vh", windowName, setWindowState }) => {
    
  return (
    <Rnd
    
    default={{
        width: width,
        height: height,
        x: 100,
        y: 100
    }}

    >
        <div className="window">
            <div className="window-nav">
                <div className="dots">
                    <div onClick={() => setWindowState(state => ({...state, [windowName]: false})) } className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="user"><p>srvshah - zsh</p></div>
            </div>
            <div className="window-body">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow