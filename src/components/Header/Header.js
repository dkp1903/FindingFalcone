import React from 'react'
import {utilFunctions} from '../../utils/util.js'
import './Header.scss'

const Header = () => {
    
    return (
        <div>
            <div className="title">
                <h1>Finding Falcone! </h1>
            </div>
            <div className="header-options">
                <div className="reset">
                    <span onClick={() => window.location.reload()}>Reset</span>
                    <span>  |  </span>
                    <span className="geekspage" onClick={() => utilFunctions.geekTrustHome()}> Geeks Trust Home </span>
                </div>
            </div>
        </div>
    )
}

export default Header