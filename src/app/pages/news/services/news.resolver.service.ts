import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { NewsApiActions } from "../state/actions";
import * as fromRoute from "../state/reducers/news.reducer";

@Injectable({
  providedIn: "root",
})
export class NewsResolverService implements Resolve<void> {
  constructor(private store: Store<fromRoute.NewsState>) {}

  resolve(): void {
    this.store.dispatch(NewsApiActions.getNewsRequest({ params: {} }));
  }
}
