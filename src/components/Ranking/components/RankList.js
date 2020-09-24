import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './RankList.css';

export default function RankList() {
    return(
        <Fragment>
            <div className="rank__list">
            <div className="rank__bboy--profile">
                
            </div>
            <div className="rank__bboy--name">
                Bboy Shigeo
            </div>
            <span className="rank__bboy--crew">Reborn</span>
            <span className="rank__bboy--city">Santa Cruz</span>
            <div className="rank__bboys--point">
                50
            </div>
            </div>
            <div className="rank__list">
            <div className="rank__bboy--profile">
                
            </div>
            <div className="rank__bboy--name">
                Bboy Sean
            </div>
            <span className="rank__bboy--crew">Reborn</span>
            <span className="rank__bboy--city">Cochabamba</span>
            <div className="rank__bboys--point">
                49
            </div>
        </div>
        <div className="rank__list">
            <div className="rank__bboy--profile">
                
            </div>
            <div className="rank__bboy--name">
                Bboy Cripi
            </div>
            <span className="rank__bboy--crew">Reborn</span>
            <span className="rank__bboy--city">La Paz</span>
            <div className="rank__bboys--point">
                40
            </div>
        </div>
        <div className="rank__list">
            <div className="rank__bboy--profile">
                
            </div>
            <div className="rank__bboy--name">
                Bgirl Cuca
            </div>
            <span className="rank__bboy--crew">Femme Fatale</span>
            <span className="rank__bboy--city">Oruro</span>
            <div className="rank__bboys--point">
                30
            </div>
        </div>
        <div className="rank__list">
            <div className="rank__bboy--profile">
                
            </div>
            <div className="rank__bboy--name">
                Bboy Rock One
            </div>
            <span className="rank__bboy--crew">Espiritu de Lucha</span>
            <span className="rank__bboy--city">Tarija</span>
            <div className="rank__bboys--point">
                20
            </div>
        </div>

        <Link to="/bboys">Ver todos</Link>
        </Fragment>
    )
}