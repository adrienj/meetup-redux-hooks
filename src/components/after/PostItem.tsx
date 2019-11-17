import React, { useCallback } from 'react';
import { getOpenedItem, ResourceType, setOpenedItem } from '../../store/ui/index';
import classNames from 'classnames';
import { Post } from '../../store/data/index';
import { useSelector, useDispatch } from 'react-redux';

interface OwnProps {
    post: Post;
}

export const PostItem = ({ post }: OwnProps) => {
    const openedItem = useSelector(getOpenedItem);
    const dispatch = useDispatch();

    const postId = post.id;
    const openItem = useCallback(() => dispatch(setOpenedItem({ resource: ResourceType.posts, id: postId })), [
        dispatch,
        postId
    ]);

    return (
        <li
            onClick={openItem}
            className={classNames('post-item', {
                selected: openedItem && openedItem.resource === ResourceType.posts && openedItem.id === post.id
            })}
        >
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 10).trim()}...</p>
        </li>
    );
};
