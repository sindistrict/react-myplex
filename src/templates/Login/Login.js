/**
 * Import React.
 */

import React from 'react'
import Axios from 'axios'



/**
 * Import component dependencies.
 */

import {Form, Input} from '../../components/Elements/Forms'
import {Grid, Column} from '../../components/Elements/Grids'
import {Notice} from '../../components/Elements/Alerts'
import Button from '../../components/Elements/Buttons'



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

    this.state = { response: false, state: 'pending' }

  }

  formSubmit = (e, credentials) => {

    const _this = this

    _this.setState({ response: false, state: 'loading' })

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

      _this.setState({ response: error.response.data.error, state: 'pending' })

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
                 {this.state.response && <Notice>{this.state.response}</Notice> }
                 <Button type="submit" state={this.state.state}>Sign In</Button>
               </Form>
             </Column>
           </Grid>

  }

}