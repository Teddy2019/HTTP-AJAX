import React from 'react';
import { Link } from 'react-router-dom';

function EachFriend (props) {
    const friend = props.friends.find(i => String(i.id) === props.match.params.id)

    if (!friend) {
		return <div>Loading...</div>
	}
    return(
        <div className='Friend'>
           
            <p><strong>Name: </strong> {  friend.name} </p>
            <p><strong>Age: </strong> {  friend.age} </p>
            <p><strong>email: </strong> {  friend.email} </p>
            <Link to={`/edit/${friend.id}`} >Update</Link>
        </div>
    )
}

export default EachFriend;