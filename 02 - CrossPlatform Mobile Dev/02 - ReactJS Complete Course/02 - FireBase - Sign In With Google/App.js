import { auth } from './firebase/firebase'

componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    }) 
}