import { createAction, props, union } from "@ngrx/store";

import { GetNewsRequest, GetNewsSuccess } from "../news.model";
import { HttpErrorResponse } from "@angular/common/http";

const actions = "API";
const source = "News";

export const getNewsRequest = createAction(
  `[${source}][${actions}] GET_NEWS_REQUEST`,
  props<{ params: GetNewsRequest }>()
);
export const getNewsSuccess = createAction(
  `[${source}][${actions}] GET_NEWS_SUCCESS`,
  props<{ success: GetNewsSuccess }>()
);
export const getNewsFailure = createAction(
  `[${source}][${actions}] GET_NEWS_FAILURE`,
  props<{ failure: HttpErrorResponse }>()
);

const all = union({
  getNewsRequest,
  getNewsSuccess,
  getNewsFailure,
});
export type NewsApiActionsUnion = typeof all;
