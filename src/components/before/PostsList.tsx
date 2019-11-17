import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Post } from '../../store/data';
import { getPosts } from '../../store/data/index';
import PostItem from './PostItem';

interface StateProps {
    posts: Post[];
}

type Props = StateProps;

const PostsList = ({ posts }: Props) => {
    return (
        <ul>
            {posts.map(post => <PostItem key={post.id}  post={post} />)}
        </ul>
    );
};

const mapState = (state: StoreState): StateProps => ({
    posts: getPosts(state)
});

export default connect(mapState)(PostsList);
