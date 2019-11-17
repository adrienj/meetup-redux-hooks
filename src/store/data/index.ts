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
}

export const dataInitialState: DataState = {
    posts: [],
    comments: []
};

export const dataReducer = (
    state: DataState = dataInitialState, 
    action: AnyAction
) => {
    switch(action.type) {
        case SET_POSTS:  
            return ({...state, posts: action.payload });
        case SET_COMMENTS:  
            return ({...state, comments: action.payload });
        default:
            return state;
    }
};

export const SET_POSTS = 'SET_POSTS' as const;
export const SET_COMMENTS = 'SET_COMMENTS' as const;

export const setPosts = (payload: Post[]) => ({type: SET_POSTS, payload});
export const setComments = (payload: Comment[]) => ({type: SET_COMMENTS, payload});

export const getData = (state: StoreState) => state.data;
export const getPosts = (state: StoreState) => state.data.posts;
export const getComments = (state: StoreState) => state.data.comments;