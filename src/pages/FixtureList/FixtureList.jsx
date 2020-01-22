import React from 'react'



const FixtureList = props => {
    return(
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Home Team</th>
      <th scope="col">Date</th>
      <th scope="col">Venue</th>
      <th scope="col">Score</th>
      <th scope="col">Away Team</th>
    </tr>
  </thead>
  <tbody>
    {fixtures.map(fixture => (
    <tr>
      <td>{fixture.homeTeam.team_name}</td>
      <td>{fixture.event_date}</td>
      <td>{fixture.venue}</td>
      <td>{fixture.score.fulltime}</td>
      <td>{fixture.awayTeam.team_name}</td>
    </tr>
    ))}
  </tbody>
</table>

        </div>
    )
};

export default FixtureList;