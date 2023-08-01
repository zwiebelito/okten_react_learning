import React from 'react';
import {Post} from "./Post/Post";
import {PostsService} from "../../services/PostsService";

class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        PostsService.getAll().then(posts => this.setState({posts: posts}))
    }

    render() {
        const {posts} = this.state;
        return (
            <>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </>
        )
    }
}

export {Posts};