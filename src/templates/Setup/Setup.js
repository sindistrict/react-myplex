/**
 * Import React.
 */

import React from 'react'
import { withAxios } from 'react-axios'


/**
 * Import component dependencies.
 */

import Login from '../Login/Login'
import FetchServers from '../../components/FetchServers/FetchServers'
import Button from '../../components/Button/Button'

import {Input} from '../../components/Elements/Forms'


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
    this.state = {value: 'null'}

  }

  selectTrigger = (e) => {

    this.setState({ value: e.target.value })
    if(this.props.onChange) this.props.onChange(e)

  }

  formSubmit = (e) => {

    e.preventDefault()
    console.log(this.state.value)

  }

  render() {

    return <form onSubmit={this.formSubmit}>
             <FetchServers onChange={this.selectTrigger}/>
             <Button type="submit" disabled={this.state.value === 'null'}>Select Server</Button>
             <Input label="Hello World" onChange={(e) => console.log(e.target.value)}/>
           </form>

  }

}