import React from 'react';
class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {userId, id, title, body} = this.props.post;
        return (
            <div>
                <h4>User id: {userId} --- Id: {id}</h4>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
            </div>
        )
    }
}

export {Post};