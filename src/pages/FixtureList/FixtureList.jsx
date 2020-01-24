import React from 'react'
import { Link } from "react-router-dom"



const FixtureList = props => (
    
    
    
<div>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Home Team</th>
      <th scope="col">Date</th>
      <th scope="col">Venue</th>
      <th scope="col">Score</th>
      <th scope="col">Away Team</th>
      <th scope="col"> Fixture Capture</th>
    </tr>
  </thead>
  <tbody>
    {props.fixtures.map(fixture => (
    <tr >
      <td>{fixture.homeTeam.team_name} <img src={fixture.homeTeam.logo} /></td>
      <td>{fixture.event_date}</td>
      <td>{fixture.venue}</td>
      <td>{fixture.score.fulltime}</td>
      <td>{fixture.awayTeam.team_name} <img src={fixture.awayTeam.logo} /></td>
      <td><button value={fixture.fixture_id} id={props.fixtures.indexOf(fixture)} onClick={(e) => props.handleOnChange(e)}>Get Fix</button>
      <button onClick={props.oddsOnClick}>Search Odds</button>
      <Link to='/singlefixture'>Go to Odds page</Link>
      </td>
    </tr>
    ))}
  </tbody>
</table>

</div>
   
);

export default FixtureList;