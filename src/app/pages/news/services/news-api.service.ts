import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetNewsRequest, GetNewsSuccess } from "../state/news.model";
import { environment } from "../../../../environments/environment";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NewsApiService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param paramsRequest
   */
  getNews({ country }: GetNewsRequest): Observable<GetNewsSuccess> {
    return this.http
      .request<GetNewsSuccess>("GET", `${environment.API_URL}/news`)
      .pipe(delay(environment.API_DELAY));
  }
}
