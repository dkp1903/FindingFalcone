import React from 'react'
import {stateMethods} from '../../utils/stateUpdaterMethods.js'
import './Header.scss'

const Header = () => {
    
    return (
        <div>
            <div className="title">
                <h1>Get me the damn Falcon!</h1>
            </div>
            <div className="header-options">
                <div className="reset">
                    <button className = "reset-button" onClick={() => window.location.reload()}>Reset</button>
                   </div>
            </div>
        </div>
    )
}

export default Header