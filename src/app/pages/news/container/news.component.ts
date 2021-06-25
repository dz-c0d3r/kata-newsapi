import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Renderer2,
} from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";
import { NewsUiActions } from "../state/actions";
import { Store } from "@ngrx/store";
import * as fromSelectors from "../state/selectors/news.selectors";
import * as fromReducer from "../state/reducers/news.reducer";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { Articles } from "../state/news.model";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  country$: Observable<string>;
  articles$: Observable<Articles[]>;
  updatedDateTime$: Observable<Date>;
  totalResults$: Observable<number | undefined>;

  constructor(
    private store: Store<fromReducer.NewsState>,
    private renderer: Renderer2
  ) {
    this.country$ = this.store.select(fromSelectors.selectCountryNews);
    this.articles$ = this.store.select(fromSelectors.selectArticles);
    this.updatedDateTime$ = this.store.select(
      fromSelectors.selectLastUpdateDatetime
    );
    this.totalResults$ = this.store.select(fromSelectors.selectTotalResults);
  }
}
