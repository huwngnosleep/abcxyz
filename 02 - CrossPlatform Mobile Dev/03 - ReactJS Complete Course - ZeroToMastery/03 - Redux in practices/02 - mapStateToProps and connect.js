// Heading.js
import { connect } from 'react-redux'

// mapStateToProps nhận đầu vào là state hiện tại của App
// state ở đây mặc định là cái root-reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

// connect là một cái higher order function, sẽ chuyển cái state ở trên thành props rồi gắn nó với cái component
export default connect(mapStateToProps)(Heading) 

// khi mapStateToProps có nghĩa là đã truyền cho component một cái props từ reducer vào rồi
// do đó không cần pass props từ ngoài vào nữa
