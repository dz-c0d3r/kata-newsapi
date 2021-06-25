import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewsRoutingModule } from "./news-routing.module";
import { MatSliderModule } from "@angular/material/slider";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromNews from "./state/reducers/news.reducer";
import { NewsEffects } from "./state/effects/news.effects";
import { initialState } from "./state/reducers/news.reducer";
import { NewsApiService } from "./services/news-api.service";
import { NewsComponent } from "./container/news.component";
import { ArticleComponent } from "./presentational/article/article.component";

@NgModule({
  declarations: [NewsComponent, ArticleComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatSliderModule,
    StoreModule.forFeature(fromNews.newsFeatureKey, fromNews.reducer, {
      initialState: initialState,
    }),
    EffectsModule.forFeature([NewsEffects]),
  ],
  providers: [NewsApiService],
  exports: [NewsComponent, ArticleComponent],
})
export class NewsModule {}
