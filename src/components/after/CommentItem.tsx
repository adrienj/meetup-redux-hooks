import React, { useCallback } from 'react';
import { getOpenedItem, ResourceType, setOpenedItem } from '../../store/ui/index';
import classNames from 'classnames';
import { Comment } from '../../store/data/index';
import { useSelector, useDispatch } from 'react-redux';

interface OwnProps {
    comment: Comment;
}

export const CommentItem = ({ comment }: OwnProps) => {
    const openedItem = useSelector(getOpenedItem);

    const dispatch = useDispatch();

    const commentId = comment.id;
    const openItem = useCallback(() => dispatch(setOpenedItem({ resource: ResourceType.comments, id: commentId })), [
        dispatch,
        commentId
    ]);

    return (
        <li
            onClick={openItem}
            className={classNames('comment-item', {
                selected: openedItem && openedItem.resource === ResourceType.comments && openedItem.id === comment.id
            })}
        >
            <p>{comment.body.slice(0, 10).trim()}...</p>
            <span>by {comment.name}</span>
        </li>
    );
};
