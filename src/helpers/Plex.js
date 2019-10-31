module.exports = {


  Authenticate: (username, password, success, error) => {

    const Request = require('request')

    Request.post('https://plex.tv/users/sign_in.json', {form: {

      'user[login]': username,
      'user[password]': password,
      'X-Plex-Client-Identifier': 'react-myplex'

    }}, (err, res, body) => {

      let response = JSON.parse(body)

      if(!err && !response.error && res.statusCode === 201) {

        if(success && typeof success === 'function') return success(response)

      }else{

        if(error && typeof error === 'function') return error(response.error)

      }

    })

  },


  IsAuthenticated: () => {

    const Request = require('request')

    let Authenticated = false

    if(localStorage.token) {

      Authenticated = Request({url: 'https://plex.tv/pms/servers.xml', qs: {'X-Plex-Token': localStorage.token}}, (err, res) => {

        return (!err && res.statusCode === 200)

      })

    }

    return Authenticated

  },

  FetchServers: (callback) => {

    const Request = require('request')
    const XML2JSON = require('xml2js').parseString

    Request({uri: 'https://plex.tv/pms/servers.xml', qs: {'X-Plex-Token': localStorage.token}}, (err, res, body) => {

      let Servers = []

      if(!err && res.statusCode === 200) {

        XML2JSON(body, (err, result) => {

          if(Object.keys(result.MediaContainer.Server).length) {

            for(let key in result.MediaContainer.Server) {

              let server = result.MediaContainer.Server[key].$

              Servers.push({
                key: key,
                uuid: server.machineIdentifier,
                name: server.name,
                host: server.host,
                port: server.port
              })

            }

          }

        })

      }

      return callback(Servers)

    })

  }


}