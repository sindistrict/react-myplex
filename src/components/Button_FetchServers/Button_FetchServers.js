/**
 * Import React.
 */

import React from 'react'


/**
 * Import Firebase
 */

import Firebase from '../../firebase'


/**
 * Import component dependencies.
 */

import Button from '../Button/Button'


/**
 * Import helper functions.
 */

import {FetchServers} from '../../helpers/Plex'


/**
 * Render the React component.
 */

export default class ButtonFetchServers extends React.Component {

  async FetchAllServers() {

    const Servers = await FetchServers();

    for(let key in Servers) {

      Firebase.child(`servers/${Servers[key].uuid}`).set(Servers[key], (err) => {
  
        if(err) throw err;

        console.log(`${Servers[key].name} has been saved to the database`)
  
      })

    }

  }

  render() {

    return  <Button onClick={this.FetchAllServers}>{this.props.children}</Button>

  }

}