import React from 'react';
import { ResourceType } from '../../store/ui/index';
import classNames from 'classnames';
import { Comment } from '../../store/data/index';
import { useOpenedItem } from './6.useOpenedItem';

interface OwnProps {
    comment: Comment;
}

export const CommentItem = ({ comment }: OwnProps) => {
    const { toggleOpenItem, opened } = useOpenedItem(ResourceType.comments, comment);

    return (
        <li
            onClick={toggleOpenItem}
            className={classNames('comment-item', {
                opened
            })}
        >
            <p>{comment.body.slice(0, 10).trim()}...</p>
            <span>by {comment.name}</span>
        </li>
    );
};
