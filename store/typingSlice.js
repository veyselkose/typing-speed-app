import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async (data) => {
  const res = await fetch("api/", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ lang: data.lang }),
  }).then((data) => data.json());
  return res;
});

const initialState = {
  data: [],
  words: "hello world",
  text: "",
  status: true,
  lang: "en",
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
      state.words = state.data.filter((item) => item.name === state.text)[0].value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
        state.words = action.payload[0].value;
        state.text = action.payload[0].name;
      });
  },
});

export const { changeText } = typingSlice.actions;

export default typingSlice.reducer;
