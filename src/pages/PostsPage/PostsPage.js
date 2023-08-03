import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import {urls} from "../../constants/urls";
import {Posts} from "../../components/Posts/Posts";

const PostsPage = () => {
    const posts = useFetch(urls.posts)
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostsPage};