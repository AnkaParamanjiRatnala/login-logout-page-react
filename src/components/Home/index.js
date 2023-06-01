import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickChange = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div>
        {isLoggedIn ? (
          <Message messageText="Welcome User" />
        ) : (
          <Message messageText="Please Login" />
        )}
        {isLoggedIn ? (
          <Login loginText="Logout" clickButton={this.onClickChange} />
        ) : (
          <Logout logoutText="Login" clickButton={this.onClickChange} />
        )}
      </div>
    )
  }
}

export default Home
