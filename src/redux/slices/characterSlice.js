import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services";


const initialState = {
    characters: [],
    errors: null
}

const all = createAsyncThunk(
    'characterSlice/all',
    async (iDs, thunkAPI) => {
        try {
            const {data} = await charactersService.getByIds(iDs);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.characters = action.payload;
                state.errors = null;
            })
            .addCase(all.rejected, (state, action) => {
                state.errors = action.payload;
            })
})

const {reducer: characterReducer, actions} = characterSlice;

const charactersActions = {
    all
}

export {
    charactersActions,
    characterReducer
}