import { createSelector } from 'reselect';
import { StoreState } from '../index';
import { getData, getPosts, getComments, Post, Comment } from '../data';
import { AnyAction } from 'redux';

export enum ResourceType {
    posts = 'posts',
    comments = 'comments'
}
export interface OpenedItem {
    resourceType: ResourceType;
    id: number;
}

// Reducer

export interface UiState {
    openedItem: OpenedItem | null;
    resourceType: ResourceType;
}

export const uiInitialState: UiState = {
    openedItem: null,
    resourceType: ResourceType.posts
};

export const uiReducer = (state: UiState = uiInitialState, action: AnyAction): UiState => {
    switch (action.type) {
        case TOGGLE_OPENED_ITEM:
            return {
                ...state,
                openedItem:
                    state.openedItem &&
                    action.payload.id === state.openedItem.id &&
                    action.payload.resourceType === state.openedItem.resourceType
                        ? null
                        : action.payload
            };
        case SET_RESOURCE:
            return { ...state, resourceType: action.payload };
        default:
            return state;
    }
};

// Actions

export const SET_RESOURCE = 'SET_RESOURCE' as const;
export const TOGGLE_OPENED_ITEM = 'TOGGLE_OPENED_ITEM' as const;

export const setResourceType = (payload: ResourceType) => ({ type: SET_RESOURCE, payload });
export const toggleOpenedItem = (payload: OpenedItem | null) => ({ type: TOGGLE_OPENED_ITEM, payload });

// Selectors

export const getResourceType = (state: StoreState) => state.ui.resourceType;
export const getOpenedItem = (state: StoreState) => state.ui.openedItem;

export const getOpenedItemData = createSelector(
    getPosts,
    getComments,
    getOpenedItem,
    (posts, comments, openedItem) =>
        (openedItem &&
            ((openedItem.resourceType === ResourceType.posts ? posts : comments) as (Post | Comment)[]).find(
                d => d.id === openedItem.id
            )) ||
        null
);

export const getOpenedItemResourceType = createSelector(
    getOpenedItem,
    openedItem => openedItem && openedItem.resourceType
);

export const getOpenedListData = createSelector(getResourceType, getData, (resourceType, data) => data[resourceType]);
