class App extends React.Component {
  state = {
    username: ''
  }

  handleClick = () => {
    axios.get('http://localhost:3000/author').then((response) => {
      this.setState({username:response.data[0].name})
    })
  }

  render = () => {
    return <div>
      <button onClick={this.handleClick}>TEST API</button>
      <h1>{this.state.username}</h1>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
