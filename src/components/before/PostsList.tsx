import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Post } from '../../store/data';
import { getPosts } from '../../store/data/index';
import PostItem from './PostItem';

interface Props {
    posts: Post[];
}

const PostsList = ({ posts }: Props) => {
    return (
        <ul>
            {posts.map(post => <PostItem key={post.id}  post={post} />)}
        </ul>
    );
};

const mapState = (state: StoreState) => ({
    posts: getPosts(state)
});

export default connect(mapState)(PostsList);
