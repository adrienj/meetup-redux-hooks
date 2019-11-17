import React from 'react';
import { getOpenedItem, OpenedItem, ResourceType, setOpenedItem } from '../../store/ui/index';
import { StoreState } from '../../store';
import classNames from 'classnames';
import { Comment } from '../../store/data/index';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

interface OwnProps {
    comment: Comment;
}

interface StateProps {
    openedItem: OpenedItem | null;
}

interface DispatchProps {
    openItem: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const CommentItem = ({ openedItem, comment, openItem }: Props) => (
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

const mapState = (state: StoreState): StateProps => ({
    openedItem: getOpenedItem(state)
});
const mapDispatch = (dispatch: Dispatch<AnyAction>, ownProps: OwnProps): DispatchProps => ({
    openItem: () => dispatch(setOpenedItem({ resource: ResourceType.comments, id: ownProps.comment.id }))
});

export default connect(mapState, mapDispatch)(CommentItem);
