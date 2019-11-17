import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Dispatch, AnyAction } from 'redux';
import { getResource, setResource } from '../../store/ui';
import { ResourceType } from '../../store/ui/index';
import PostsList from './PostsList';
import CommentsList from './CommentsList';

interface StateProps {
  resource: ResourceType;
}
interface DispatchProps {
  setResource: (resource: ResourceType) => void;
}

type Props = StateProps & DispatchProps;

const resourceLists = {
  [ResourceType.posts]: PostsList,
  [ResourceType.comments]: CommentsList,
}

const List = ({resource, setResource}: Props) => {
    const ResourceList = resourceLists[resource];

    return <div>
      <select onChange={e => setResource(e.target.value as ResourceType)} value={resource}>
        {Object.keys(ResourceType).map(res => 
          <option key={res} value={res}>{res}</option>
        )}
      </select>
      <ResourceList />
    </div>
};

const mapState = (state: StoreState): StateProps => ({
    resource: getResource(state)
});

const mapDispatch = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    setResource: (resource: ResourceType) => dispatch(setResource(resource))
});

export default connect(mapState, mapDispatch)(List);
