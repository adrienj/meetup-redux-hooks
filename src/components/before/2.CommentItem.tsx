import React from 'react';
import { OpenedItem, ResourceType } from '../../store/ui/index';
import classNames from 'classnames';
import { Comment } from '../../store/data/index';

export interface CommentItemOwnProps {
    comment: Comment;
}

export interface CommentItemStateProps {
    openedItem: OpenedItem | null;
}

export interface CommentItemDispatchProps {
    toggleOpenItem: () => void;
}

type Props = CommentItemOwnProps & CommentItemStateProps & CommentItemDispatchProps;

export const CommentItem = ({ openedItem, comment, toggleOpenItem }: Props) => (
    <li
        onClick={toggleOpenItem}
        className={classNames('comment-item', {
            opened: openedItem && openedItem.resourceType === ResourceType.comments && openedItem.id === comment.id
        })}
    >
        <p>{comment.body.slice(0, 10).trim()}...</p>
        <span>by {comment.name}</span>
    </li>
);
