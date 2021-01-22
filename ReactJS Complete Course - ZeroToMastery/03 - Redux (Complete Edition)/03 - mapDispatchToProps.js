// App.js
import { connect } from 'react-redux'

componentDidMount() {
    const { setCurrentUser } = this.props
    // tại sao phải lấy setCurrentUser từ props thì chưa biết

    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    }) 
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options)
// vì không muốn cho cái state nào thành props nên cho null làm param đầu tiên
export default connect(null, mapDispatchToProps)(App)