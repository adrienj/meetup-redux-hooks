import React from 'react';
import { ResourceType } from '../../store/ui/index';
import classNames from 'classnames';
import { Post } from '../../store/data/index';
import { useOpenedItem } from './useOpenedItem';

interface OwnProps {
    post: Post;
}

export const PostItem = ({ post }: OwnProps) => {
    const { openItem, selected } = useOpenedItem(ResourceType.posts, post);

    return (
        <li
            onClick={openItem}
            className={classNames('post-item', {
                selected
            })}
        >
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 10).trim()}...</p>
        </li>
    );
};
