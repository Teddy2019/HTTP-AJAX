import React from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
          friends: [],
    }
  }

  componentDidMount(){
    axios.get ('http://localhost:5000/friends')
    .then(response =>  {this.setState({friends: response.data})})
    .catch(err => {console.log('Error:', err)})
  }

  render(){
  return (
    <div className="App">
      {this.state.friends.map((friend) => {return <Friends friend = {friend} />})}
    </div>
  );}
}

export default App;
