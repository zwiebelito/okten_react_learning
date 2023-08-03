import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import {urls} from "../../constants/urls";
import Comments from "../../components/Comments/Comments";

const CommentsPage = () => {
    const comments = useFetch(urls.comments)
    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsPage};