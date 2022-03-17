import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface BoxState {
    estado: boolean;
}

const initialState: BoxState = {
    estado: true,
};

const boxSlice = createSlice({
    name: "box",
    initialState,
    reducers: {
        toggle: (state) => {
            state.estado = !state.estado;
            console.log(state.estado);
        },
    },

});

export const { toggle } = boxSlice.actions;

export const selectorBox = (state: RootState) => state.box.estado;

export default boxSlice.reducer;