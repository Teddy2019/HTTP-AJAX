import React from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import Form from './components/Form';
import { Route, Link } from 'react-router-dom';

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
      <div className='List'>
        <Link className='Header' to='/'>Friends List </Link> <br /><br />
        <Link className='Edit' to='/add' >Add</Link>
        <Link className='Edit' to='/add' >Edit</Link>
      </div>
      <Route path= '/' exact render={()=> <Friends Friends= {this.state.friends}  />} />
      <Route path= '/add' exact render={(props)=><Form {...props} />} />
    </div>
  );}
}

export default App;
