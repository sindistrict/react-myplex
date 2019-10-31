import Firebase from 'firebase/firebase'
import Config from './config'

Firebase.initializeApp(Config.Firebase)

export default Firebase.database().ref()