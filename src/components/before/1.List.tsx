import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Dispatch, AnyAction } from 'redux';
import { ResourceType, getResourceType, setResourceType } from '../../store/ui/index';
import PostsList from './PostsList';
import CommentsList from './CommentsList';
import { getIsLoading } from '../../store/data';

interface StateProps {
    resourceType: ResourceType;
    isLoading: boolean;
}

interface DispatchProps {
    setResourceType: (resource: ResourceType) => void;
}

type Props = StateProps & DispatchProps;

const resourceListComponents = {
    [ResourceType.posts]: PostsList,
    [ResourceType.comments]: CommentsList
};

const List = ({ isLoading, resourceType, setResourceType }: Props) => {
    const ResourceList = resourceListComponents[resourceType];

    return (
        <div className="list">
            <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setResourceType(e.target.value as ResourceType);
                }}
                value={resourceType}
            >
                {Object.keys(ResourceType).map(res => (
                    <option key={res} value={res}>
                        {res}
                    </option>
                ))}
            </select>
            {isLoading ? <h2>Loading...</h2> : <ResourceList />}
        </div>
    );
};

const mapState = (state: StoreState): StateProps => ({
    resourceType: getResourceType(state),
    isLoading: getIsLoading(state)
});

const mapDispatch = (dispatch: Dispatch<AnyAction>):DispatchProps => ({
    setResourceType: (resourceType: ResourceType) => dispatch(setResourceType(resourceType))
});

export default connect(mapState, mapDispatch)(List);
