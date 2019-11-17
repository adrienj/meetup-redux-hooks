import React from 'react';
import { ResourceType } from '../../store/ui/index';
import classNames from 'classnames';
import { Comment } from '../../store/data/index';
import { useOpenedItem } from './useOpenedItem';

interface OwnProps {
    comment: Comment;
}

export const CommentItem = React.memo(({ comment }: OwnProps) => {
    const { openItem, selected } = useOpenedItem(ResourceType.comments, comment);

    return (
        <li
            onClick={openItem}
            className={classNames('comment-item', {
                selected
            })}
        >
            <p>{comment.body.slice(0, 10).trim()}...</p>
            <span>by {comment.name}</span>
        </li>
    );
});
