import React from 'react';
import CallsheetCreate from './components/CallsheetCreate';
import UserDisplay from './components/UserDisplay';

import axios from 'axios';


// TEST <UserTestForm /> to test the users

class App extends React.Component {
  state = {
    users: [],
    displayUser: '',
    route: ''
  }

  // Makeshift Route Changing until I can figure out router
  changeRoute = (e) => {
    let updatedRoute = e.target.getAttribute('route');
    this.setState({
      route: updatedRoute
    })
  }

  // Gets and stores all the data as soon as the app is mounted
  componentDidMount = () => {
    axios.get('http://localhost:3000/users').then((response) => {
      this.setState({
        users: response.data
      })
    })
  }

  // Display profile information of user on click
  displayUserProfile = (e) => {
    let userToDisplay = this.state.users[e.target.id]
    this.setState({
      displayUser:userToDisplay
    })
  }

  render = () => {
    // DESTRUCTURING :: displayUser now equals this.state.displayUser //
    return (
      <div>
        <nav style={{display: 'flex', justifyContent: 'space-around', paddingTop: '20px'}}>
          <a
            onClick={this.changeRoute}
            route="allUsers"
            href="#">All Users View</a>
          <a
            onClick={this.changeRoute}
            route="createCallsheet"
            href="#">Call Sheet View</a>
        </nav>
          {this.state.route === "allUsers" ? <UserDisplay
            allUsers={this.state.users}
            displayUser={this.state.displayUser}
            displayUserProfile={this.displayUserProfile}/> : null}
          {this.state.route === "createCallsheet" ? <CallsheetCreate/> : null}
      </div>
    )
  }
}


export default App;
