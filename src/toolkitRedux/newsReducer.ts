import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface NewsItem {
  id: string;
  webPublicationDate: string;
  webTitle: string;
  pillarName: string;
}

interface NewsState {
  news: NewsItem[];
}

interface FetchNewsParams {
  query: string;
  itemOnPage: string;
  newest: string;
}

const initialState: NewsState = {
  news: [],
};

const key = "61667a39-a309-4fcf-bd7a-8f503bf6d796";

export const getNews = createAsyncThunk(
  "news/getNews",
  async ({ query, itemOnPage, newest }: FetchNewsParams, { rejectWithValue, dispatch }) => {
    try {
      const server = `https://content.guardianapis.com/search?q=${query}&api-key=${key}&page-size=${itemOnPage}&order-by=${newest}`;
      const res = await fetch(server);
      if (!res.ok) {
        throw Error("server error");
      }
      const data = await res.json();
      dispatch(setNews(data.response.results));
    } catch (err) {
      console.log("server error");
      return rejectWithValue(err);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.news = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state) => {
        console.log("fulfilled");
      })
      .addCase(getNews.pending, (state) => {
        console.log("pending");
      })
      .addCase(getNews.rejected, (state) => {
        console.log("rejected");
      });
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
