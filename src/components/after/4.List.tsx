import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResource, setResource } from '../../store/ui';
import { ResourceType } from '../../store/ui/index';
import { PostsList } from './PostsList';
import { CommentsList } from './CommentsList';
import { getIsLoading } from '../../store/data';

const resourceListComponents = {
    [ResourceType.posts]: PostsList,
    [ResourceType.comments]: CommentsList
};

export const List = React.memo(() => {
    const resource = useSelector(getResource);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setResource(e.target.value as ResourceType));
    };

    const ResourceList = resourceListComponents[resource];

    return (
        <div>
            <select onChange={onChange} value={resource}>
                {Object.keys(ResourceType).map(res => (
                    <option key={res} value={res}>
                        {res}
                    </option>
                ))}
            </select>
            {isLoading ? <h2>Loading...</h2> : <ResourceList />}
        </div>
    );
});
