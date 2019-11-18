import { StoreState } from '../index';
import { AnyAction } from 'redux';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface DataState {
    posts: Post[];
    comments: Comment[];
    isLoading: boolean;
}

export const dataInitialState: DataState = {
    posts: [],
    comments: [],
    isLoading: false
};

export const dataReducer = (
    state: DataState = dataInitialState, 
    action: AnyAction
) => {
    switch(action.type) {
        case SET_LOADING:  
            return ({...state, isLoading: true });
        case SET_POSTS:  
            return ({...state, posts: action.payload, isLoading: false });
        case SET_COMMENTS:  
            return ({...state, comments: action.payload, isLoading: false });
        default:
            return state;
    }
};

export const SET_LOADING = 'SET_LOADING' as const;
export const SET_POSTS = 'SET_POSTS' as const;
export const SET_COMMENTS = 'SET_COMMENTS' as const;

export const setIsLoading = () => ({type: SET_LOADING});
export const setPosts = (payload: Post[]) => ({type: SET_POSTS, payload});
export const setComments = (payload: Comment[]) => ({type: SET_COMMENTS, payload});

export const getData = (state: StoreState) => state.data;
export const getPosts = (state: StoreState) => state.data.posts;
export const getComments = (state: StoreState) => state.data.comments;
export const getIsLoading = (state: StoreState) => state.data.isLoading;