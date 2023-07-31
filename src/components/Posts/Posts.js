import React from 'react';
import {Post} from "./Post/Post";

class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json())
            .then(posts => this.setState({posts: posts}))
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