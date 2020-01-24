import React from 'react'
import { Link } from 'react-router-dom'
import betService from '../../utils/betService'

const SingleFixture = props =>(

  // async function addBet (){
  //   await fetch("/api/bets/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       user: props.user.email,
  //       homeN: props.fixtures[parseInt(props.ofix)].homeTeam.team_name,
  //       hLogo: props.fixtures[parseInt(props.ofix)].homeTeam.logo,
  //       awayN: props.fixtures[parseInt(props.ofix)].awayTeam.team_name,
  //       aLogo: props.fixtures[parseInt(props.ofix)].awayTeam.logo,
  //       hOdd: props.odds[0].odd,
  //       dOdd: props.odds[1].odd,
  //       aOdd: props.odds[2].odd,
  //     })
  //   })
  // }

  
    <div>
        <div className="card" >
          <img className="card-img-top" src={props.fixtures[parseInt(props.ofix)].homeTeam.logo} alt="Card cap" />
          <span>{ props.fixtures[parseInt(props.ofix)].homeTeam.team_name}</span>
          <img className="card-img-top" src={props.fixtures[parseInt(props.ofix)].awayTeam.logo} alt="Card cap" />
          <span>{ props.fixtures[parseInt(props.ofix)].awayTeam.team_name}</span>
          <div className="card-body">
          <span>{props.odds[0].odd}</span><span>{props.odds[0].value}</span>
          <span>{props.odds[1].odd}</span><span>{props.odds[1].value}</span>
          <span>{props.odds[2].odd}</span><span>{props.odds[2].value}</span>
          <button onClick={betService}> save bet</button>
          </div>
        </div>
    </div>

  
);

export default SingleFixture;