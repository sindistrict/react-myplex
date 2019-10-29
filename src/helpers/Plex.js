module.exports = {


  Authenticate: (username, password, success, error) => {

    const Request = require('request')

    Request.post('https://plex.tv/users/sign_in.json', {form: {

      'user[login]': username,
      'user[password]': password,
      'X-Plex-Client-Identifier': 'react-myplex'

    }}, (err, res, body) => {

      let response = JSON.parse(body)

      if(!err && res.statusCode === 201) {

        if(success && typeof success === 'function') return success(response)

      }else{

        if(error && typeof error === 'function') return error(err)

      }

    })

  },


  IsAuthenticated: () => {

    let Authenticated = false

    if(localStorage.uuid && localStorage.username && localStorage.email && localStorage.token) {

      const Request = require('request')

      Authenticated = Request({url: 'https://plex.tv/pms/servers.xml', qs: {'X-Plex-Token': localStorage.token}}, (err, res) => {

        return (!err && res.statusCode === 200)

      })

    }

    return Authenticated;

  },


  FetchServers: () => {

    const Request = require('request')
    const Parser = require('xml-js')

    Request({url: 'https://plex.tv/pms/servers.xml', qs: {'X-Plex-Token': localStorage.token}}, (err, res, body) => {

      if(!err && res.statusCode === 200) {

        let result = Parser.xml2js(body, {compact: true, spaces: 4})
        console.log(result.MediaContainer.Server['_attributes'])

      }

    })

  }


}