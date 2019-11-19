import { ResourceType, getOpenedItem, toggleOpenedItem } from '../../store/ui';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Comment, Post } from '../../store/data/index';

export const useOpenedItem = (resourceType: ResourceType, item: Comment | Post) => {
    const openedItem = useSelector(getOpenedItem);

    const dispatch = useDispatch();

    const itemId = item.id;
    const toggleOpenItem = useCallback(() => dispatch(toggleOpenedItem({ resourceType, id: itemId })), [
        dispatch,
        resourceType,
        itemId
    ]);

    const opened = openedItem && openedItem.resourceType === resourceType && openedItem.id === itemId;

    return { toggleOpenItem, opened };
};
