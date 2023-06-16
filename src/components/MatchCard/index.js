import './index.css'

const MatchCard = props => {
  const {MatchEachCard} = props
  const updatedMatchEachCard = {
    competingTeam: MatchEachCard.competing_team,
    competingTeamLogo: MatchEachCard.competing_team_logo,
    result: MatchEachCard.result,
    matchStatus: MatchEachCard.match_status,
  }
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = updatedMatchEachCard

  const HelloClass = matchStatus === 'Won' ? 'c-hello' : 'p-hello'

  return (
    <li className="li-match-element">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="comp"
      />
      <p className="c-head">{competingTeam}</p>
      <p className="c-para">{result}</p>
      <p className={HelloClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
