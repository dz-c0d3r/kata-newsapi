import { createSelector } from "@ngrx/store";
import * as fromNews from "../reducers/news.reducer";

//#region Settings
export const selectNewsSettings = createSelector(
  fromNews.getNewsState,
  ({ settings }) => settings
);
export const selectPollingInterval = createSelector(
  selectNewsSettings,
  ({ pollingInterval }) => pollingInterval
);
//#endregion

//#region API
export const selectNewsApiResponseStatus = createSelector(
  fromNews.getNewsState,
  ({ apiStatus }) => apiStatus
);
//#endregion

//#region UI
export const selectNewsUi = createSelector(
  fromNews.getNewsState,
  ({ ui }) => ui
);

export const selectLastUpdateDatetime = createSelector(
  selectNewsUi,
  ({ updatedDateTime }) => updatedDateTime
);
export const selectArticles = createSelector(
  selectNewsUi,
  ({ articles }) => articles
);
export const selectTotalResults = createSelector(
  selectNewsUi,
  ({ totalResults }) => totalResults
);
export const selectCountryNews = createSelector(
  selectNewsUi,
  ({ country }) => country
);
//#endregion

//#region PAYLOAD
export const selectNewsApiPayload = createSelector(
  selectNewsUi,
  ({ country }) => ({
    country,
  })
);
//#endregion
