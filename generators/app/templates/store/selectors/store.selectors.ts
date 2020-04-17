import * as from<%= componentName %> from '/<%= componentName %>/store/reducers/<%= componentName %>.reducer';
import { State } from '/<%= componentName %>/store/reducers/<%= componentName %>.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const select<%= ComponentName %>State = createFeatureSelector<State>(from<%= componentName %>.<%= componentName %>FeatureKey);
export const selectLista<%= ComponentName %> = createSelector(select<%= ComponentName %>State, from<%= ComponentName %>.getLista<%= ComponentName %>);
export const selectLoading = createSelector(select<%= ComponentName %>State, from<%= ComponentName %>.getLoading);
export const selectBlad = createSelector(select<%= ComponentName %>State, from<%= ComponentName %>.getBlad);
export const select<%= ComponentName %> = createSelector(select<%= ComponentName %>State, from<%= ComponentName %>.get<%= ComponentName %>);
