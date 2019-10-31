/**
 * Import React.
 */

import React from 'react'


/**
 * Import component dependencies.
 */

import Wrapper from '../../../components/Wrapper/Wrapper'


/** 
 * Import the component styles.
 */

import './Header.scss'


/**
 * Render the React component.
 */

export default class Header extends React.Component {

  render() {

    return  <header className="SD_Header">
              <h1>Header</h1>
            </header>

  }

}