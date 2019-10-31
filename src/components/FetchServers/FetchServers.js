/**
 * Import React.
 */

import React from 'react'
import { withAxios } from 'react-axios'


/**
 * Import component dependencies.
 */

import Select from '../Select/Select'


/**
 * Render the React component.
 */

export default withAxios({

  url: 'https://plex.tv/pms/servers.xml',
  params: {'X-Plex-Token': localStorage.token}

})(class SetupRaw extends React.Component {

  constructor(props) {

    super(props)

    this.state = {}
    this.state.selected = 'null'

  }

  selectTrigger = (e) => {

    this.setState({ selected: e.target.value })
    if(this.props.onChange) this.props.onChange(e)

  }

  render() {

    const _this = this

    function ServerSelect(props) {

      const options = props.servers ? props.servers.map(server =>
        <option key={server.$.machineIdentifier} value={server.$.machineIdentifier}>{server.$.name}</option>
      ) : ''

      return <Select value={_this.state.selected} onChange={_this.selectTrigger}>
               <option value='null'>Choose your server</option>
               {options}
             </Select>
  
    }

    const {error, response, isLoading} = this.props 

    if(error) {

      return (<div>Unable to fetch servers: {error.message}</div>)

    } else if(isLoading) {

      return <ServerSelect/>
      
    } else if(response !== null) {

      const XML2JSON = require('xml2js').parseString

      let servers; XML2JSON(response.data, (err, result) => { servers = result.MediaContainer.Server })

      return <ServerSelect servers={servers}/>

    }

    return <ServerSelect/>

  }

})