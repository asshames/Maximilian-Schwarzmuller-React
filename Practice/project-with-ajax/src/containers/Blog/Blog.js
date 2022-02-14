import React, { Component } from 'react';

import './Blog.css';
import Post from '../../components/Post/Post';

class Blog extends Component {
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
            </div>
        );
    }
}

export default Blog;