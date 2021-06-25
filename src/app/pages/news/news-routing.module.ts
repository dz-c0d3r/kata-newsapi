import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NewsResolverService } from "./services/news.resolver.service";
import { NewsComponent } from "./container/news.component";

const routes: Routes = [
  {
    path: "",
    resolve: { news: NewsResolverService },
    component: NewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [NewsResolverService],
})
export class NewsRoutingModule {}
