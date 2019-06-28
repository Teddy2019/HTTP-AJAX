import React from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import Form from './components/Form';
import { Route, Link } from 'react-router-dom';
import EachFriend from './components/EachFriend';
import EditForm from './components/EditForm'

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

  updateFriends = (friends)=> {this.setState({friends: friends});}

  render(){
  return (
    <div className="App">
      <div className='List'>
        <Link className='Header' to='/'>Friends List </Link> <br /><br />
        <Link className='Edit' to='/add' >Add</Link>
      </div>
      <Route path= '/' exact render={()=> <Friends Friends= {this.state.friends}  />} />
      <Route path= '/add' exact render={(props)=><Form {...props} updateFriends={this.updateFriends} />} />
      <Route path= '/friend/:id' exact render={(props)=><EachFriend {...props} friends={this.state.friends} />} />
      <Route path= '/edit/:id' exact render={(props)=><EditForm {...props} updateFriends={this.updateFriends}  />} />
    </div>
  );}
}

export default App;
