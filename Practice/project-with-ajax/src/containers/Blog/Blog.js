import React, { Component } from 'react';

import axios from 'axios';

import './Blog.css';
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data });
                // console.log( response );
            });
    }

    render() {

        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}/>;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;