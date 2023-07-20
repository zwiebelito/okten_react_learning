import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService/commentsService";
import Comment from "./Comment/Comment";
import {useNavigate} from "react-router-dom";
import {links} from "../../constants/links/links";
import styles from './Comments.module.css'

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll()
            .then(({data}) => setComments(data));
    }, []);

    const navigate = useNavigate();
    const getPost = id => {
        navigate(`${links.POSTS}/${id}`);
    }

    return (
        <>
            <div className={styles.container}>
                {comments.map(comment => <Comment key={comment.id} comment={comment} getPost={getPost}/>)}
            </div>
        </>
    );
};

export default Comments;