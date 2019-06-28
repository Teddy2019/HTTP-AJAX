import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: '',
            errorMessage: null
        }
    }

changeHandeler = (e) => {
    this.setState({[e.target.name] : e.target.value})
}  

addNewFriend = (e) => {

    //const {name, age, email} = this.state;
    const payload = {name: this.state.name, age: this.state.age, email:this.state.email};
    e.preventDefault();
    axios.post('http://localhost:5000/friends', payload)
			.then((response) => {
				this.setState({
					errorMessage: null
				})

				this.props.updateFriends(response.data)
				this.props.history.push('/')
			})
			.catch((err) => {
				this.setState({
					errorMessage: err.response.data.error
				})
			})

}

render(){
    return (
        <form className='Form' onSubmit={this.addNewFriend} >
             <input type='text' name='name'  placeholder='name' value={this.state.name} onChange={this.changeHandeler} /> <br /><br />
             <input type='text' name='age'  placeholder='age' value={this.state.age} onChange={this.changeHandeler} /> <br /><br />
             <input type='text' name='email'  placeholder='email' value={this.state.email} onChange={this.changeHandeler} /><br /><br />
             <button type="submit">Add</button>
             
        </form>
    )
}
};

export default Form;