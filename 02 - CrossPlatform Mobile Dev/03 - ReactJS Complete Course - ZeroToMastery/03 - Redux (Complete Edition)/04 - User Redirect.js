// App.js
import { Redirect } from 'react-router-dom'

// bản chất của cái này là (state) và state.user.currentUser
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

// current user đang là state hiện tại
// nên phải map nó sang props
// rồi dùng this.props.currentUser để conditionaly render
export default connect(mapStateToProps, mapDispatchToProps)(App)

<Route exact path="/signin/" render={() => 
    this.props.currentUser ? <Redirect to="/" /> : <SignIn />
} />