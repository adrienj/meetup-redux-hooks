import axios from 'axios';
import { SET_RESOURCE, ResourceType, getResource } from '../ui/index';
import { setPosts, Post, Comment, setComments } from './index';

export const DataMiddleware = (store: any) => {
    const getData = () => {
        const resource = getResource(store.getState());
        axios.get('https://jsonplaceholder.typicode.com/' + resource).then(response => {
            if (resource === ResourceType.posts) {
                store.dispatch(setPosts(response.data as Post[]));
            } else if (resource === ResourceType.comments) {
                store.dispatch(setComments(response.data as Comment[]));
            }
        });
    }

    getData();
    
    return (next: any) => (action: any) => {
        const result = next(action);

        if (action.type === SET_RESOURCE) {
            getData();
        }

        return result;
    };
};
