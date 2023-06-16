import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    TeamEachDetails: [],
    isAvailable: false,
  }

  componentDidMount() {
    console.log('Hello')
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({
      TeamEachDetails: updatedData,
      isAvailable: true,
    })
  }

  render() {
    const {TeamEachDetails, isAvailable} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = TeamEachDetails
    console.log(recentMatches)

    return (
      <div className="bg-container">
        {!isAvailable && (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        <div>
          {isAvailable && (
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-image"
            />
          )}
        </div>
        <h1 className="M-head">Latest Matches</h1>
        {isAvailable && (
          <LatestMatch
            LatestEachMatch={latestMatchDetails}
            key={latestMatchDetails.id}
          />
        )}
        <ul className="match-list-container">
          {isAvailable &&
            recentMatches.map(eachItem => (
              <MatchCard MatchEachCard={eachItem} key={eachItem.id} />
            ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
