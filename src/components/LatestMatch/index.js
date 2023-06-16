import './index.css'

const LatestMatch = props => {
  const {LatestEachMatch} = props
  const updatedLatestMatch = {
    umpires: LatestEachMatch.umpires,
    result: LatestEachMatch.result,
    manOfTheMatch: LatestEachMatch.man_of_the_match,
    date: LatestEachMatch.date,
    venue: LatestEachMatch.venue,
    competingTeam: LatestEachMatch.competing_team,
    competingTeamLogo: LatestEachMatch.competing_team_logo,
    firstInnings: LatestEachMatch.first_innings,
    secondInnings: LatestEachMatch.second_innings,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedLatestMatch

  return (
    <div className="card-container">
      <div className="card1">
        <p className="l-head">{competingTeam}</p>
        <p className="l-date">{date}</p>
        <p className="l-venue">{venue}</p>
        <p className="l-op">{result}</p>
      </div>
      <div className="card">
        <img
          src={competingTeamLogo}
          className="comp-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="card3">
        <p className="l-1">First Innings</p>
        <p className="l-2">{firstInnings}</p>
        <p className="l-1">Second Innings</p>
        <p className="l-2">{secondInnings}</p>
        <p className="l-1">Man Of The Match</p>
        <p className="l-2">{manOfTheMatch}</p>
        <p className="l-1">Umpires</p>
        <p className="l-2">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
