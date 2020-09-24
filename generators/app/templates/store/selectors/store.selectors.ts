import * as from<%= upperCamelCase %> from '/<%= separate %>/store/reducers/<%= separate %>.reducer';
import { State } from '/<%= separate %>/store/reducers/<%= separate %>.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const select<%= upperCamelCase %>State = createFeatureSelector<State>(from<%= upperCamelCase %>.<%= upperCamelCase %>FeatureKey);

export const selectLista<%= upperCamelCase %> = createSelector(select<%= upperCamelCase %>State, from<%= upperCamelCase %>.getLista<%= upperCamelCase %>);

export const selectLoading = createSelector(select<%= upperCamelCase %>State, from<%= upperCamelCase %>.getLoading);

export const selectBlad = createSelector(select<%= upperCamelCase %>State, from<%= upperCamelCase %>.getBlad);

export const select<%= upperCamelCase %> = createSelector(select<%= upperCamelCase %>State, from<%= upperCamelCase %>.get<%= upperCamelCase %>);
