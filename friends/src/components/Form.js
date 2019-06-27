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
render(){
    return (
        <form className='Form' >
             <input placeholder='name' /> <br /><br />
             <input placeholder='age' /> <br /><br />
             <input placeholder='email' /><br /><br />
        </form>
    )
}
};

export default Form;