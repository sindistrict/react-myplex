/**
 * Import React.
 */

import React from 'react'
import ReactDOM from 'react-dom'


/** 
 * Import universal styles.
 */

import './universal.scss'


/**
 * Import component dependencies.
 */

import Authenticator from './templates/Authenticator/Authenticator'


/**
 * Render the React component.
 */

ReactDOM.render(<Authenticator/>, document.getElementById('root'));