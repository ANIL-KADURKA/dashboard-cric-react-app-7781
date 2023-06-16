import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplTeams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({
      iplTeams: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {iplTeams, isLoading} = this.state

    return (
      <div className="ipl-dashboard-app">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        <ul className="teams-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            iplTeams.map(eachItem => (
              <TeamCard TeamEachCard={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
