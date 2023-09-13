import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchQuiz = createAsyncThunk(
    "quiz/fetchQuiz", async params => await axios.get(`/quiz/${params.collectionName}/${params.count}`).data);

export const fetchCollection = createAsyncThunk(
    "collection/fetchCollection", async collectionName => await axios.get(`collection/${collectionName}`));

export const add = createAsyncThunk(
    "test/add", async () => await axios.post('/test').data);

export const update = createAsyncThunk(
    "test/update", async id => await axios.patch(`/test/${id}`).data);

export const remove = createAsyncThunk(
    "test/remove", async id => await axios.delete(`/test/${id}`));


const initialState = {
    quiz: {
        items: [],
        status: 'loading'
    },
    collection: {
        items: [],
        status: 'loading'
    },
};

const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchQuiz.pending]: state=>{
            state.quiz.items = [];
            state.quiz.status = 'loading';
        },
        [fetchQuiz.fulfilled]: (state, action)=>{
            state.quiz.items = action.payload;
            state.quiz.status = 'loaded';
        },
        [fetchQuiz.rejected]: state=>{
            state.quiz.items = [];
            state.quiz.status = 'error';
        },
        [fetchCollection.pending]: state=>{
            state.collection.items = [];
            state.collection.status = "loading";
          },
        [fetchCollection.fulfilled]: (state, action) => {
            state.collection.items = action.payload.data;
            state.collection.status = "loaded";
        },
        [fetchCollection.rejected]: state=>{
            state.collection = {
                items: [],
                status: "error"
            };
            // state.collection.items = [];
            // state.collection.status = "error";
        },
        [remove.pending]: (state, action) => {
            state.collection.items = state.collection.items.filter(
              obj=> obj._id !== action.meta.arg
            );
        },
    }
})

export const testsReducer = testsSlice.reducer;