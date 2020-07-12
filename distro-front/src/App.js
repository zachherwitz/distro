import React from 'react';
import UserTestForm from './components/UserTestForm';
import UserDisplay from './components/UserDisplay'
import axios from 'axios';

// TEST <UserTestForm /> to test the users

class App extends React.Component {
  state = {
    users: [],
    displayUser: ''
  }

  componentDidMount = () => {
    axios.get('http://localhost:3000/users').then((response) => {
      this.setState({
        users: response.data
      })
    })
  }

  displayUserProfile = (e) => {
    let userToDisplay = this.state.users[e.target.id]
    this.setState({
      displayUser:userToDisplay
    })
  }

  render = () => {
    // DESTRUCTURING :: displayUser now equals this.state.displayUser //
    const {displayUser} = this.state;
    return <div>
      <ul> Users:
        {this.state.users.map((user, index) => {
          return <li key={index} id={index} onClick={this.displayUserProfile}>{user.name}</li>
        })}
      </ul>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      {displayUser ? <UserDisplay user={displayUser} /> : null}
    </div>
  }
}


export default App;
