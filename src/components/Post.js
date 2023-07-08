import React, {useState} from 'react';
import {PostDetail} from "./PostDetail";

const Post = ({post}) => {
    const {id, title} = post;
    const [isShow, setInfo] = useState(false)
    return (
        <div>
            <h2>Post id: {id}</h2>
            <h2>Title: {title}</h2>
            <button onClick={()=>setInfo(prev => !prev)}>{isShow?'Hide':'Show'}</button>
            {
                isShow && <PostDetail post={post}/>
            }
        </div>
    );
};

export {Post};