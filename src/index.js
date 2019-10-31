/**
 * Import React.
 */

import React from 'react'
import ReactDOM from 'react-dom'


/**
 * Import Configuration.
 */

import Config from './config'


/**
 * Import component dependencies.
 */

import Setup from './templates/Setup/Setup'
import Authenticator from './templates/Authenticator/Authenticator'


/**
 * Import Firebase. 
 */

import Firebase from './firebase'


/** 
 * Import universal styles.
 */

import './universal.scss'


if(Config.Firebase && Object.keys(Config.Firebase).length) {

  Firebase.child('/config').once('value').then(results => {

    if(results.val()) {
  
      ReactDOM.render(<Authenticator/>, document.getElementById('root'));
  
    }else{
  
      ReactDOM.render(<Setup/>, document.getElementById('root'));
  
    }
  
  })

}else{

  ReactDOM.render(<h1>Config Tutorial Goes Here</h1>, document.getElementById('root'));

}