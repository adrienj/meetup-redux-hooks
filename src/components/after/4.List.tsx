import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResourceType, setResourceType } from '../../store/ui';
import { ResourceType } from '../../store/ui/index';
import { PostsList } from './PostsList';
import { CommentsList } from './CommentsList';
import { getIsLoading } from '../../store/data';

const resourceListComponents = {
    [ResourceType.posts]: PostsList,
    [ResourceType.comments]: CommentsList
};

export const List = () => {
    const resourceType = useSelector(getResourceType);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setResourceType(e.target.value as ResourceType));
    };

    const ResourceList = resourceListComponents[resourceType];

    return (
        <div className="list">
            <select onChange={onChange} value={resourceType}>
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
