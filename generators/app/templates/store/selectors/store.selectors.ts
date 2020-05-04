import * as from<%= cN %> from '/<%= cN %>/store/reducers/<%= cN %>.reducer';
import { State } from '/<%= cN %>/store/reducers/<%= cN %>.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const select<%= CN %>State = createFeatureSelector<State>(from<%= cN %>.<%= cN %>FeatureKey);
export const selectLista<%= CN %> = createSelector(select<%= CN %>State, from<%= CN %>.getLista<%= CN %>);
export const selectLoading = createSelector(select<%= CN %>State, from<%= CN %>.getLoading);
export const selectBlad = createSelector(select<%= CN %>State, from<%= CN %>.getBlad);
export const select<%= CN %> = createSelector(select<%= CN %>State, from<%= CN %>.get<%= CN %>);
