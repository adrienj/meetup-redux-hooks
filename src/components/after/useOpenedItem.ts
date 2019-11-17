import { ResourceType, getOpenedItem, setOpenedItem } from '../../store/ui';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Comment, Post } from '../../store/data/index';

export const useOpenedItem = (resource: ResourceType, item: Comment | Post) => {
    const openedItem = useSelector(getOpenedItem);

    const dispatch = useDispatch();

    const itemId = item.id;
    const openItem = useCallback(() => dispatch(setOpenedItem({ resource: ResourceType.comments, id: itemId })), [
        dispatch,
        itemId
    ]);

    const selected = openedItem && openedItem.resource === resource && openedItem.id === itemId;

    return { openItem, selected };
};
