import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResource, setResource } from '../../store/ui';
import { ResourceType } from '../../store/ui/index';
import { PostsList } from './PostsList';
import { CommentsList } from './CommentsList';

const resourceLists = {
    [ResourceType.posts]: PostsList,
    [ResourceType.comments]: CommentsList
};

export const List = React.memo(() => {
    const resource = useSelector(getResource);
    const dispatch = useDispatch();
    const onChange = useCallback(e => dispatch(setResource(e.target.value as ResourceType)), [dispatch]);

    const ResourceList = resourceLists[resource];

    return (
        <div>
            <select onChange={onChange} value={resource}>
                {Object.keys(ResourceType).map(res => (
                    <option key={res} value={res}>
                        {res}
                    </option>
                ))}
            </select>
            <ResourceList />
        </div>
    );
});
