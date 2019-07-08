import React from 'react';
import { Link } from 'react-router-dom';

function Friend (props) {
   
    return(
        <div className='Friend'>
            <p><strong>Id: </strong> {  props.friend.id} </p>
            <p><strong>Name: </strong> {  props.friend.name} </p>
            <p><strong>Age: </strong> {  props.friend.age} </p>
            <p><strong>email: </strong> {  props.friend.email} </p>
            <Link to={`/friend/${props.friend.id}`}>Edit</Link>
        </div>
    )
}

export default Friend;