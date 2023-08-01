import React from 'react';
import {Comment} from "./Comment/Comment";
import {CommentsService} from "../../services/CommentsService";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        CommentsService.getAll().then(comment => this.setState({comments: comment }))
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