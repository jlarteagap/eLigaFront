import React, { Component, Fragment } from 'react';
import RankList from './components/RankList'
import './Ranking.css';

class Ranking extends Component{
    render(){
        return(
            <div className="sidebar ranking">
                <h2 className="title__rank">Ranking de Bboys</h2>
                <RankList />
            </div>
        )
    }
}

export default Ranking;