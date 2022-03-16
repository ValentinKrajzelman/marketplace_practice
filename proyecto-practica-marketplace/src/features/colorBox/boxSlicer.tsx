import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface BoxState {
    value: number;
}

const initialState: BoxState = {
    value: 0,
};
