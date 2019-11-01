/**
 * Import React.
 */

import React from 'react'
import { withAxios } from 'react-axios'


/**
 * Import component dependencies.
 */

import Login from '../Login/Login'
import {Wrapper} from '../../components/Elements/Helpers'
// import FetchServers from '../../components/FetchServers/FetchServers'


/** 
 * Import the component styles.
 */

import './Setup.scss'


/**
 * Render the React component.
 */

export default class Setup extends React.Component {

  constructor(props) {

    super(props)

    this.state = { step: 1, authToken: localStorage.authToken || null }

  }

  loginHandler = (response) => {

    if(response.success) {

      this.setState({ authToken: localStorage.authToken })

    }

  }

  render() {

    if(!this.state.authToken) {

      return <Wrapper>
               <h1>Setup: Step {this.state.step}</h1>
               <Login onSubmit={this.loginHandler}/>
             </Wrapper>

    }else{

      return <h1>Setup: Step 2</h1>

    }

  }

}