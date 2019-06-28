import React from 'react';
import axios from 'axios';

class EditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: '',
            errorMessage: null
        }
    }

componentDidMount() {
	const id = this.props.match.params.id

	axios.get(`http://localhost:5000/friends/${id}`)
		.then(response => {
				const { name, age, email } = response.data
				this.setState({ name, age, email })
			})
		.catch(err => {
				this.setState({
					errorMessage: err.response.data.error
				})
			})
	}


changeHandeler = (e) => {
    this.setState({[e.target.name] : e.target.value})
}  

updateFriend = (e) => {
    const id = this.props.match.params.id
    const {name, age, email} = this.state;
    const payload = {name, age, email};
    e.preventDefault();
    axios.post(`http://localhost:5000/friends/${id}`, payload)
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

deleteFriend = (e) => {
    e.preventDefault()

    const id = this.props.match.params.id

    axios.delete(`http://localhost:5000/friends/${id}`)
        .then((response) => {
            this.setState({
                errorMessage: null
            })

            this.props.updateItems(response.data)
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
        <form className='Form' onSubmit={this.updateFriend} >
             <input type='text' name='name'  placeholder='name' value={this.state.name} onChange={this.changeHandeler} /> <br /><br />
             <input type='text' name='age'  placeholder='age' value={this.state.age} onChange={this.changeHandeler} /> <br /><br />
             <input type='text' name='email'  placeholder='email' value={this.state.email} onChange={this.changeHandeler} /><br /><br />
             <button type="submit">Update</button>
             <button onClick={this.deleteFriend}>Delete</button>
             
        </form>
    )
}
};

export default EditForm;