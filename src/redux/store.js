import { createStore } from 'redux';

import rootReducer from './rootReducer';

export default function configStore(initialState) {
  return createStore(rootReducer, initialState);
}
