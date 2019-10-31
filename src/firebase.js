import Firebase from 'firebase/firebase'
import Config from './config'

if((Config.Firebase && Object.keys(Config.Firebase).length)) Firebase.initializeApp(Config.Firebase)
export default (Config.Firebase && Object.keys(Config.Firebase).length) ? Firebase.database().ref() : undefined