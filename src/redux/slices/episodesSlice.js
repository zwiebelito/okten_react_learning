import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";


const initialState = {
    episodes: [],
    prev: null,
    next: null,
    errors: null,
    episodeTitle: null,
}

const all = createAsyncThunk(
    'episodeSlice/all',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const episodeSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        getTitle: (state, action) => {
            state.episodeTitle = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.episodes = action.payload.results.map(episode => ({
                    ...episode,
                    characters: episode.characters.map(
                        character => character.split('/')
                            .slice(-1)[0]).join(',')
                }))
                state.prev = action.payload.info.prev;
                state.next = action.payload.info.next;
                state.errors = null;
            })
            .addCase(all.rejected, (state, action) => {
                state.errors = action.payload;
            })

});

const {reducer: episodeReducer, actions: {getTitle}} = episodeSlice;

const episodeActions = {
    all,
    getTitle
}

export {
    episodeActions,
    episodeReducer
}