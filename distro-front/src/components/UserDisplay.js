import React from 'react';

class UserDisplay extends React.Component {
  render = () => {
    const { user } = this.props
    return <div style={{padding: '20px'}}>
      <h1>{user.name}</h1>
      <h2>Crew Information:</h2>
      <div>
        <h4>{user.name} CALL:</h4>
        <h4>REPORT TO {user.callsheet.location}</h4>
        <ul>DEV:: Crew Information:
          <li>Department: {user.department}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
          <li>
            <ul>
              {user.distros.map((distro) => {
                return <li>{distro}</li>
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  }
}

export default UserDisplay
