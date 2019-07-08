import React from 'react';
import Friend from './Friend'

class Friends extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div>
              {this.props.Friends.map((friend) => {return <Friend friend = {friend} key={friend.id} />})}
            </div>
        )
    }
};
export default Friends;