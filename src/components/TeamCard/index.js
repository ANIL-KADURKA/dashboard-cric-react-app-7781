import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {TeamEachCard} = props
  const {id, name, teamImageUrl} = TeamEachCard
  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="li-element">
        <img src={teamImageUrl} className="team-url" alt={name} />
        <p className="t-head">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
