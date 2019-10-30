/**
 * Import React.
 */

import React from 'react'


/**
 * Import component dependencies.
 */

import Wrapper from '../../modules/Wrapper/Wrapper'
import Header from '../../templates/Globals/Header/Header'


/** 
 * Import the component styles.
 */

import './Dashboard.scss'


/**
 * Render the React component.
 */

export default class Dashboard extends React.Component {

  render() {

    return  <main>
              <Header/>
              <h1>Dashboard</h1>
            </main>

  }

}