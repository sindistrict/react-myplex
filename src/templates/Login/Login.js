/**
 * Import React.
 */

import React from 'react'


/**
 * Import Firebase.
 */

import Firebase from '../../firebase'


/**
 * Import component dependencies.
 */

import Wrapper from '../../components/Wrapper/Wrapper'
import FormField from '../../components/FormField/FormField'
import Button from '../../components/Button/Button'


/**
 * Import helper functions.
 */

import {Authenticate} from '../../helpers/Plex'


/** 
 * Import the component styles.
 */

import './Login.scss'


/**
 * Render the React component.
 */

export default class Login extends React.Component {

  constructor(props) {

    super(props)

    const _this = this

    this.state = {}
    this.state.message = ''
    this.state.username = ''
    this.state.password = ''
    this.state.authenticated = false

    this.state.onSuccess = (response) => { 

      _this.setState({ authenticated: true })
      _this.setState({ message: `Successfully logged in as ${response.user.username}` })

      if(props.onSuccess && typeof props.onSuccess === 'function') {
        return props.onSuccess(response)
      }

    }

    this.loginHandler = this.loginHandler.bind(this)

  }

  loginHandler(event) {

    const _this = this

    event.preventDefault();

    Authenticate(this.state.username, this.state.password, (response) => {

      localStorage.setItem('token', response.user.authToken)

      _this.state.onSuccess(response)

    }, (error) => {

      _this.setState({ message: error })

    })

  }

  render() {

    return  <Wrapper>
              <form onSubmit={this.loginHandler}>
                <FormField 
                  type="text" 
                  required={true} 
                  label="Username" 
                  value={this.state.username} 
                  onChange={(e) => { this.setState({ username: e.target.value }) }} />
                <FormField 
                  type="password" 
                  required={true} 
                  label="Password" 
                  value={this.state.password} 
                  onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <Button type="submit">Enter</Button>
                <strong>{this.state.message}</strong>
              </form>
            </Wrapper>

  }

}