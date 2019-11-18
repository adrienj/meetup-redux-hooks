import React from 'react';
import { getOpenedItem, OpenedItem, ResourceType, setOpenedItem } from '../../store/ui/index';
import { StoreState } from '../../store';
import classNames from 'classnames';
import { Post } from '../../store/data/index';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

interface OwnProps {
    post: Post;
}

interface StateProps {
    openedItem: OpenedItem | null;
}

interface DispatchProps {
    openItem: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const PostItem = ({ openedItem, post, openItem }: Props) => (
    <li
        onClick={openItem}
        className={classNames('post-item', {
            opened: openedItem && openedItem.resource === ResourceType.posts && openedItem.id === post.id
        })}
    >
        <h3>{post.title}</h3>
        <p>{post.body.slice(0, 10).trim()}...</p>
    </li>
);

const mapState = (state: StoreState): StateProps => ({
    openedItem: getOpenedItem(state)
});
const mapDispatch = (dispatch: Dispatch<AnyAction>, ownProps: OwnProps): DispatchProps => ({
    openItem: () => dispatch(setOpenedItem({resource: ResourceType.posts, id: ownProps.post.id}))
});

export default connect(mapState, mapDispatch)(PostItem);
