import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../store/data/index';
import { PostItem } from './7.PostItem';

export const PostsList = React.memo(() => {
    const posts = useSelector(getPosts);

    return (
        <ul>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </ul>
    );
});
