import React from 'react';
import {Comment} from "./Comment/Comment";

const Comments = ({comments}) => {
    return (
        <div>
            {comments && comments.map((comment) => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default Comments;