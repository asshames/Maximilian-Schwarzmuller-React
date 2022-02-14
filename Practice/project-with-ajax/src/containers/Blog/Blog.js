import React, { Component } from 'react';

import './Blog.css';
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;