import React from 'react';
import {Comment} from "./Comment/Comment";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments').then(data => data.json())
            .then(comment => this.setState({comments: comment }))
    }

    render() {
        const {comments} = this.state;
        return (
            <>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </>
        )
    }

}

export {Comments};