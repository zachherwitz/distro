import React from 'react';

class CallsheetCreate extends React.Component {
  state = {

  }

  composeCallsheet = () => {
    let allCalledArray = this.state.allCalled.split(',')

    let callsheetObject = {
      date: this.state.date,
      episode: this.state.episode,
      day: this.state.day,
      scriptDraft: this.state.scriptDraft,
      generalCallTime: this.state.crewCallTime,
      generalLocation: this.state.crewLocation,
      nearestHospital: this.state.hospital,
      allCalled: allCalledArray
    }
    this.props.createCallsheet(callsheetObject);
  }

  newInput = (e) => {
    const attributeId = e.target.getAttribute('id');
    switch (attributeId) {
      case 'date':
        // console.log('changing date');
        this.setState({[attributeId]:e.target.value})
        break;
      case 'episode':
        // console.log('changing episode');
        this.setState({[attributeId]:e.target.value})
        break;
      case 'day':
        // console.log('changing day');
        this.setState({[attributeId]:e.target.value})
        break;
      case 'scriptDraft':
        // console.log('changing script draft');
        this.setState({[attributeId]:e.target.value})
        break;
      case 'crewCallTime':
        // console.log('changing crew call time');
        this.setState({[attributeId]:e.target.value})
        break;
      case 'crewLocation':
        // console.log('changing crew location');
        this.setState({[attributeId]:e.target.value})
        break;
      case 'hospital':
        // console.log('changing hospital');
        this.setState({[attributeId]:e.target.value})
        break;
      case 'allCalled':
        // console.log('changin allCalled')
        this.setState({[attributeId]:e.target.value})
        break;
    }
  }

  render = () => {
    return <div>
      <form onSubmit={this.composeCallsheet}>
        <input
          onKeyUp={this.newInput}
          id="date"
          type="text"
          placeholder="date"/>
        <br/>
        <input
          onKeyUp={this.newInput}
          id="episode"
          type="text"
          placeholder="episode"/>
        <br/>
        <input
          onKeyUp={this.newInput}
          id="day"
          type="text"
          placeholder="day"/>
        <br/>
        <input
          onKeyUp={this.newInput}
          id="scriptDraft"
          type="text"
          placeholder="script draft"/>
        <br/>
        <input
          onKeyUp={this.newInput}
          id="crewCallTime"
          type="text"
          placeholder="crew call time"/>
        <br/>
        <input
          onKeyUp={this.newInput}
          id="crewLocation"
          type="text"
          placeholder="crew location"/>
        <br/>
        <input
          onKeyUp={this.newInput}
          id="hospital"
          type="text"
          placeholder="nearest hopsital"/>
        <br/>
        <input
          onKeyUp={this.newInput}
          id="allCalled"
          type="text"
          placeholder="allCalled"/>
        <br/>
        <input type="submit" value="Submit Callsheet"/>
      </form>
    </div>
  }
}

export default CallsheetCreate
