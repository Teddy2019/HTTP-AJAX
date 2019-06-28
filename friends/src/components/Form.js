import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    }

changeHandeler = (e) => {
    this.setState({[e.target.name] : e.target.value})
}  
render(){
    return (
        <form className='Form' >
             <input type='text' name='name'  placeholder='name' value={this.state.name} onChange={this.changeHandeler} /> <br /><br />
             <input type='text' name='age'  placeholder='age' value={this.state.age} onChange={this.changeHandeler} /> <br /><br />
             <input type='text' name='email'  placeholder='email' value={this.state.email} onChange={this.changeHandeler} /><br /><br />
             <button>submit</button>
             
        </form>
    )
}
};

export default Form;