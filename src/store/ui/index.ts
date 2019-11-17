import { createSelector } from 'reselect'; 
import { StoreState } from '../index';
import { getData } from '../data';
import { AnyAction } from 'redux';

export enum ResourceType {
    posts = 'posts',
    comments = 'comments'
}
export interface OpenedItem {
    resource: ResourceType;
    id: number;
}

// Reducer

export interface UiState {
    openedItem: OpenedItem | null;
    resource: ResourceType;
}

export const uiInitialState: UiState = {
    openedItem: null,
    resource: ResourceType.posts
};

export const uiReducer = (
    state: UiState = uiInitialState,
    action: AnyAction
): UiState => {
    switch (action.type) {
        case SET_OPENED_ITEM:
            return { ...state, openedItem: action.payload };
        case SET_RESOURCE:
            return { ...state, resource: action.payload };
        default:
            return state;
    }
};

// Actions

export const SET_RESOURCE = 'SET_RESOURCE' as const;
export const SET_OPENED_ITEM = 'SET_OPENED_ITEM' as const;

export const setResource = (payload: ResourceType) => ({ type: SET_RESOURCE, payload });
export const setOpenedItem = (payload: OpenedItem | null) => ({ type: SET_OPENED_ITEM, payload });

// Selectors

export const getResource = (state: StoreState) => state.ui.resource;
export const getOpenedItem = (state: StoreState) => state.ui.openedItem;

export const getOpenedListData = createSelector(
    getResource,
    getData,
    (resource, data) => data[resource]
);