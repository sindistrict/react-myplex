/**
 * Import React.
 */

import React from 'react'
import Axios from 'axios'



/**
 * Import component dependencies.
 */

import Button from '../../components/Button/Button'

import {Form, Input} from '../../components/Elements/Forms'
import {Grid, Column} from '../../components/Elements/Grids'



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

    this.state = { response: '' }

  }

  formSubmit = (e, credentials) => {

    const _this = this

    _this.setState({ response: '' })

    e.preventDefault()

    Axios({
      method: 'POST',
      url: 'https://plex.tv/users/sign_in.json',
      data: { user: credentials },
      headers: { 'X-Plex-Client-Identifier': 'react-myplex' }
    }).then(response => {

      _this.setState({ response: "Success!" })
      localStorage.setItem('authToken', response.data.user.authToken)

      if(_this.props.onSubmit) return _this.props.onSubmit({
        success: response.data.user
      })

    }).catch(error => {

      _this.setState({ response: error.response.data.error })

      if(_this.props.onSubmit) return _this.props.onSubmit({
        error: error.response.data.error
      })

    })

  }

  render() {

    return <Grid justify="center">
             <Column xs="12" sm="6">
               <Form onSubmit={(e, credentials) => this.formSubmit(e, credentials)}>
                 <Input name="login" label="Username"/>
                 <Input name="password" label="Password" type="password"/>
                 <p>{this.state.response}</p>
                 <Button type="submit">Sign In</Button>
               </Form>
             </Column>
           </Grid>

  }

}