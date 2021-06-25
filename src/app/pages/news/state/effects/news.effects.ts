import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from "rxjs/operators";
import { of, timer } from "rxjs";

import { NewsApiActions, NewsUiActions } from "../actions";
import { Store } from "@ngrx/store";
import * as fromReducer from "../reducers/news.reducer";
import * as fromSelectors from "../selectors/news.selectors";
import { NewsApiService } from "../../services/news-api.service";
import { HttpErrorResponse } from "@angular/common/http";
import { GetNewsSuccess } from "../news.model";

@Injectable()
export class NewsEffects {
  //#region newsApiGetRate$
  newsApiGetRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsApiActions.getNewsRequest, NewsUiActions.setCountry),
      withLatestFrom(
        this.store.select(fromSelectors.selectNewsApiPayload),
        this.store.select(fromSelectors.selectPollingInterval)
      ),
      switchMap(([_, params, pollingInterval]) =>
        timer(0, pollingInterval).pipe(
          mergeMap(() =>
            this.newsService.getNews(params).pipe(
              map((success: GetNewsSuccess) =>
                NewsApiActions.getNewsSuccess({ success })
              ),
              catchError((response: HttpErrorResponse) =>
                of(
                  NewsApiActions.getNewsFailure({
                    failure: response,
                  })
                )
              )
            )
          )
        )
      )
    )
  );
  //#endregion

  constructor(
    private actions$: Actions,
    private store: Store<fromReducer.NewsState>,
    private newsService: NewsApiService
  ) {}
}
