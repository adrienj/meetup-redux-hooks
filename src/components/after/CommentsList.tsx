import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../store/data/index';
import { CommentItem } from './5.CommentItem';

export const CommentsList = () => {
    const comments = useSelector(getComments);

    return (
        <ul>
            {comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </ul>
    );
};
