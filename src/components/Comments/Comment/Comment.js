import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {postId, id, email, name, body} = this.props.comment;
        return (
            <div>
                <h4>Post id: {postId} - id: {id} - name: {name}</h4>
                <p>Email: {email}</p>
                <p>Body: {body}</p>
            </div>
        )
    }
}

export {Comment};