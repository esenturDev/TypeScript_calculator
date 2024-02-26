import { configureStore } from "@reduxjs/toolkit";
import {calculatorResults} from './tools/calculatorSlice';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    calculatorResults,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type useDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;