// src/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for fetching news
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    const url = 'https://real-time-news-data.p.rapidapi.com/local-headlines?query=New-York&country=US&lang=en&limit=500';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '436e290bd8msh937e08bd13b06b7p12a85ejsn6f7c9fe0525b',
        'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
      }
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.data; // Assuming 'data' contains the array of articles
  }
);

// Define the initial state and reducers
const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
