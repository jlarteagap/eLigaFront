import React, { Fragment } from 'react';
import './Header.css'
import '../../App.css'

import Slide from '../slide'

export default function Header() {
    return(
        <Fragment>
            <header className="header">
                <div className="header__brand">
                    <h1 className="header__title">eLigaBreak </h1>
                </div>
                <nav className="header__navbar">
                    <ul>
                        <li>Home</li>
                        <li>Batallas</li>
                        <li>Ranking</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <div className="header__user">
                    <div className="header__user--icon">Icon</div>
                    <a className="header__link" href="/login">Ingresar</a>
                    <button className="btn btn--primary">
                        Registrarse
                    </button>
                </div>
            </header>
            <Slide />
        </Fragment>
    )
}