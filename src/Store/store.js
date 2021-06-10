import {createStore} from 'redux';
import {allReducer} from './combinerReducer';

let store = createStore(allReducer);

export default store;
