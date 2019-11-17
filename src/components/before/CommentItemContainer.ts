import { connect } from 'react-redux';
import { CommentItem, CommentItemStateProps, CommentItemDispatchProps, CommentItemOwnProps } from './CommentItem';
import { StoreState } from '../../store';
import { getOpenedItem, setOpenedItem, ResourceType } from '../../store/ui';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

const mapState = (state: StoreState): CommentItemStateProps => ({
    openedItem: getOpenedItem(state)
});
const mapDispatch = (dispatch: Dispatch<AnyAction>, ownProps: CommentItemOwnProps): CommentItemDispatchProps => ({
    openItem: () => dispatch(setOpenedItem({ resource: ResourceType.comments, id: ownProps.comment.id }))
});

export default connect(mapState, mapDispatch)(CommentItem);
