/**
 * Import React.
 */

import React from 'react'


/**
 * Import component dependencies.
 */

import ButtonFetchServers from '../../components/Button_FetchServers/Button_FetchServers'
import Header from '../../templates/Globals/Header/Header'


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

  async FetchAllServers() {

    const Servers = await FetchServers();

  }

  render() {

    return  <main>
              <Header/>
              <h1>Dashboard</h1>
              <ButtonFetchServers>Fetch Servers</ButtonFetchServers>
            </main>

  }

}