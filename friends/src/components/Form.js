import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state ={
            id: '',
            name: '',
            age: '',
            email: ''
        }
    }
render(){
    return (
        <form>
             Id:   <input /> <br />
             Name: <input /> <br />
             Age:  <input /> <br />
             Email: <input /><br />
        </form>
    )
}
};

export default Form;