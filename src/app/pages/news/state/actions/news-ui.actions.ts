import { createAction, props, union } from "@ngrx/store";

const actions = "UI";
const source = "News";

export const setCountry = createAction(
  `[${source}][${actions}] SET_COUNTRY`,
  props<{ value: string }>()
);

const all = union({
  setCountry,
});
export type NewsUiActionsUnion = typeof all;
