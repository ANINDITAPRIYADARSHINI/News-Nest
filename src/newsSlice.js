// src/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for fetching news
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    const apiKey = '676679172889468eb61d7745e93052cc'; // Replace with your actual API key
    const response = await fetch(`https://newsapi.org/v2/everything?q=keyword&from=2024-06-22&sortBy=publishedAt&apiKey=${apiKey}`);
    if (!response.ok) {
      if (response.status === 426) {
        throw new Error('Upgrade required to access this API.');
      }
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.articles;
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
