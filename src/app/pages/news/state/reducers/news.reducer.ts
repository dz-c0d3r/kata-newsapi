import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { NewsApiActions, NewsUiActions } from "../actions";
import { Articles } from "../news.model";

export const newsFeatureKey = "news";

export interface NewsState {
  settings: {
    pollingInterval: number;
  };
  apiStatus: string | undefined;
  ui: {
    country: string;
    totalResults: number;
    articles: Articles[];
    updatedDateTime: Date;
  };
}

export const initialState: NewsState = {
  settings: {
    pollingInterval: 3 * 1000,
  },
  apiStatus: undefined,
  ui: {
    country: "fr",
    totalResults: 0,
    articles: [],
    updatedDateTime: new Date(),
  },
};

export const reducer = createReducer(
  initialState,
  on(
    NewsApiActions.getNewsSuccess,
    (state, { success }): NewsState => ({
      ...state,
      apiStatus: success.status,
      ui: {
        ...state.ui,
        articles: success.articles,
        totalResults: success.totalResults,
        updatedDateTime: new Date(),
      },
    })
  ),
  on(
    NewsUiActions.setCountry,
    (state, { value }): NewsState => ({
      ...state,
      ui: {
        ...state.ui,
        country: value,
      },
    })
  )
);

export const getNewsState = createFeatureSelector<NewsState>(newsFeatureKey);
