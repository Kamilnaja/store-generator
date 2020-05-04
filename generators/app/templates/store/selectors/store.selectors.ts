import * as from<%= separate %> from '/<%= separate %>/store/reducers/<%= separate %>.reducer';
import { State } from '/<%= separate %>/store/reducers/<%= separate %>.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const select<%= separate %>State = createFeatureSelector<State>(from<%= separate %>.<%= separate %>FeatureKey);
export const selectLista<%= separate %> = createSelector(select<%= separate %>State, from<%= separate %>.getLista<%= separate %>);
export const selectLoading = createSelector(select<%= separate %>State, from<%= separate %>.getLoading);
export const selectBlad = createSelector(select<%= separate %>State, from<%= separate %>.getBlad);
export const select<%= separate %> = createSelector(select<%= separate %>State, from<%= separate %>.get<%= separate %>);
