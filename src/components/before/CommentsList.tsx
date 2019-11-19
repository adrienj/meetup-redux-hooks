import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Comment } from '../../store/data';
import { getComments } from '../../store/data/index';
import CommentItem from './3.CommentItemContainer';

interface Props {
    comments: Comment[];
}

const CommentsList = ({ comments }: Props) => (
    <ul>
        {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
        ))}
    </ul>
);

const mapState = (state: StoreState) => ({
    comments: getComments(state)
});

export default connect(mapState)(CommentsList);
