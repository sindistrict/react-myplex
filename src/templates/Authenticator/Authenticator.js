/**
 * Import React.
 */

import React from 'react'


/**
 * Import component dependencies.
 */

import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'


/**
 * Import helper functions.
 */

import {IsAuthenticated} from '../../helpers/Plex'


/**
 * Render the React component.
 */

export default class Authenticator extends React.Component {

  constructor(props) {

    super(props)

    this.state = {}
    this.state.authenticated = IsAuthenticated()

  }

  render() {

    if(this.state.authenticated) {

      return <Dashboard/>

    }else{

      return <Login onSuccess={(e) => { this.setState({ authenticated: true }) }}/>

    }

  }

}