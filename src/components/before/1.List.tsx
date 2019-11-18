import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { Dispatch, AnyAction } from 'redux';
import { getResource, setResource } from '../../store/ui';
import { ResourceType } from '../../store/ui/index';
import PostsList from './PostsList';
import CommentsList from './CommentsList';
import { getIsLoading } from '../../store/data';

interface StateProps {
    resource: ResourceType;
    isLoading: boolean;
}
interface DispatchProps {
    setResource: (resource: ResourceType) => void;
}

type Props = StateProps & DispatchProps;

const resourceListComponents = {
    [ResourceType.posts]: PostsList,
    [ResourceType.comments]: CommentsList
};

const List = ({ isLoading, resource, setResource }: Props) => {
    const ResourceList = resourceListComponents[resource];

    return (
        <div>
            <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setResource(e.target.value as ResourceType);
                }}
                value={resource}
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
    resource: getResource(state),
    isLoading: getIsLoading(state)
});

const mapDispatch = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    setResource: (resource: ResourceType) => dispatch(setResource(resource))
});

export default connect(mapState, mapDispatch)(List);
