import React, { Fragment } from 'react'
import './BattleList.css'

export default function BatleList(){
    return(
        <Fragment>
            <h2>Ultimas Batallas Online</h2>

            <div className="battle__content">
                <div className="battles">
                    <div className="battle__bboy">
                        Bboys Andreas
                    </div>
                    <div className="battle_vs">
                        VS
                    </div>
                    <div className="battle__bboy">
                        Bboy Joaquin
                    </div>
                    <div className="battle__des">
                        Clasificatoria Grupo 4
                    </div>
                    <div className="battle__btn btn">
                        Ver ahora
                    </div>
                </div>
                <div className="battles">
                    <div className="battle__bboy">
                        Bboys Andreas
                    </div>
                    <div className="battle_vs">
                        VS
                    </div>
                    <div className="battle__bboy">
                        Bboy Joaquin
                    </div>
                    <div className="battle__bboy">
                        Bboy Joaquin
                    </div>
                    <div className="battle__des">
                        Clasificatoria Masacre 2021
                    </div>
                    <div className="battle__btn btn">
                        Ver ahora
                    </div>
                </div>
                <div className="battles">
                    <div className="battle__bboy">
                        Bboys Andreas
                    </div>
                    <div className="battle_vs">
                        VS
                    </div>
                    <div className="battle__bboy">
                        Bboy Joaquin
                    </div>
                    
                    <div className="battle__des">
                        BBB 10
                    </div>
                    <div className="battle__btn btn">
                        Ver ahora
                    </div>
                </div>
                <div className="battles">
                    <div className="battle__bboy">
                        Bboys Andreas
                    </div>
                    <div className="battle_vs">
                        VS
                    </div>
                    <div className="battle__bboy">
                        Bboy Joaquin
                    </div>
                    <div className="battle__des">
                        Call Out
                    </div>
                    <div className="battle__btn btn">
                        Ver ahora
                    </div>
                </div>
            </div>
        </Fragment>
    )
}