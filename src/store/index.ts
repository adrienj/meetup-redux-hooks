import { DataState, dataReducer, dataInitialState } from './data';
import { UiState, uiReducer, uiInitialState } from './ui';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DataMiddleware } from './data/middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface StoreState {
    ui: UiState;
    data: DataState;
}

const initialState = {
    ui: uiInitialState,
    data: dataInitialState
};

const reducers = combineReducers<StoreState>({
    ui: uiReducer,
    data: dataReducer
});

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(DataMiddleware)));

store.dispatch({type: '@@INIT'});