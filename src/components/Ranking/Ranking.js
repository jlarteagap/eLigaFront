import React, { Component } from 'react';
import RankList from './components/RankList'
import CrewList from './components/CrewList'
import './Ranking.css';

class Ranking extends Component{
    render(){
        return(
            <div className="sidebar ranking">
                <h2 className="title__rank">Top 5 Bboys Bolivia</h2>
                <RankList />
                <h2 className="title__rank">Top 5 Crews Bolivia</h2>
                <CrewList />
            </div>
        )
    }
}

export default Ranking;