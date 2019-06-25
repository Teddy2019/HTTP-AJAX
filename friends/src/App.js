import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
          friends: [],
    }
  }

  componentDidMount(){
    axios.get ('http://http://localhost:5000/friends')
    .then(response =>  {this.setState({friends: response.data})})
    .catch(err => {console.log('Error:', err)})
  }

  render(){
  return (
    <div className="App">
      
    </div>
  );}
}

export default App;
