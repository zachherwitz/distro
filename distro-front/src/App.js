import React from 'react';
import UserTestForm from './components/UserTestForm';
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
      {displayUser ?
        <div>
          <h1>NAME: {displayUser.name}</h1>
          <h2>CALL TIME: {displayUser.callsheet.callTime} </h2>
          <h2>LOCATION: {displayUser.callsheet.location}</h2>
          <h3>DEPARTMENT: {displayUser.email}</h3>
          <h4>EMAIL: {displayUser.email}</h4>
          <h4>PHONE: {displayUser.email}</h4>
          <h6>id: {displayUser._id}</h6>
        </div>
        : null
      }
    </div>
  }
}


export default App;
