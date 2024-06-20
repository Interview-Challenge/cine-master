import {combineReducers, configureStore} from '@reduxjs/toolkit';
import recommendationReducer from '@/stores/recommendationSlice.ts';

export default configureStore({
  reducer: combineReducers({
    recommendation: recommendationReducer,
  }),
});
