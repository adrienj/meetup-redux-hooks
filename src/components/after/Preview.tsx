import React from 'react';
import { Post, Comment } from '../../store/data';
import { ResourceType, getOpenedItemData, getOpenedItemResourceType } from '../../store/ui/index';
import { useSelector } from 'react-redux';

export const Preview = () => {
    const openedItemData = useSelector(getOpenedItemData);
    const resourceType = useSelector(getOpenedItemResourceType);

    if (!openedItemData) {
        return <i>Click on an item on the left</i>;
    }

    const comment = resourceType === ResourceType.comments ? (openedItemData as Comment) : null;
    const post = resourceType === ResourceType.posts ? (openedItemData as Post) : null;

    return (
        <div className="preview">
            {comment ? (
                <>
                    <h2>Comment of post {comment.postId}</h2>
                    <p>{comment.body}</p>
                    <span>
                        by <strong>{comment.name}</strong> ({comment.email})
                    </span>
                </>
            ) : post ? (
                <>
                    <h2>Post #{post.id}</h2>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <span>
                        by user ID : <strong>{post.userId}</strong>
                    </span>
                </>
            ) : null}
        </div>
    );
};
