/**
 * Import React.
 */

import React from 'react'


/**
 * Import component dependencies.
 */

import Wrapper from '../../modules/Wrapper/Wrapper'


/**
 * Import helper functions.
 */

import {FetchServers} from '../../helpers/Plex'


/** 
 * Import the component styles.
 */

import './Dashboard.scss'


/**
 * Render the React component.
 */

export default class Dashboard extends React.Component {

  render() {

    const Servers = FetchServers()

    return  <Wrapper>
              <h1>Dashboard</h1>
            </Wrapper>

  }

}