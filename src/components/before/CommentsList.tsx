import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Comment } from '../../store/data';
import { getComments } from '../../store/data/index';
import CommentItem from './CommentItemContainer';

interface StateProps {
    comments: Comment[];
}

type Props = StateProps;

const CommentsList = ({ comments }: Props) => (
    <ul>
        {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
        ))}
    </ul>
);

const mapState = (state: StoreState): StateProps => ({
    comments: getComments(state)
});

export default connect(mapState)(CommentsList);
