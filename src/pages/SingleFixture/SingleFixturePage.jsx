import React from 'react'
import { Link } from 'react-router-dom'

const SingleFixture = (props) =>(
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
          </div>
        </div>
    </div>


);

export default SingleFixture;