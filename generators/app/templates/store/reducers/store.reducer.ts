import * as <%= upperCamelCase %>Actions from '...actions';
import { ListaWynikow<%= upperCamelCase %> } from '...interface';
import { KryteriaWyszukiwania, Podpowiedz } from '...';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const <%= lowerCamelCase %>FeatureKey = '<%= name %>';

export interface State {
  listaWynikow: ListaWynikow<%= upperCamelCase %>;
  podpowiedzi: Podpowiedz[];
  kryteriaWyszukiwania: KryteriaWyszukiwania;
  loading: boolean;
  blad: any;
}

export const initialState: State = {
  listaWynikow: null,
  podpowiedzi: [],
  kryteriaWyszukiwania: null,
  loading: false,
  blad: null
};

const <%= lowerCamelCase %>Reducer: ActionReducer<State> = createReducer(
  initialState,
  on(<%= upperCamelCase %>Actions.pobierzListe<%= upperCamelCase %>, (state, { params: kryteriaWyszukiwania }) => ({
    ...state,
    loading: true,
    kryteriaWyszukiwania
  })),
  on(<%= upperCamelCase %>Actions.pobierzListe<%= upperCamelCase %>Sukces, (state, { payload }) => ({
    ...state,
    loading: false,
    listaWynikow: payload
  })),
  on(<%= upperCamelCase %>Actions.pobierzListe<%= upperCamelCase %>Blad, (state, { blad }) => ({
    ...state,
    loading: false,
    blad: blad
  })),
  on(<%= upperCamelCase %>Actions.pobierzPodpowiedzi<%= upperCamelCase %>, state => state),
  on(<%= upperCamelCase %>Actions.pobierzPodpowiedzi<%= upperCamelCase %>Sukces, (state, { payload }) => ({
    ...state,
    podpowiedzi: payload
  })),
  on(<%= upperCamelCase %>Actions.pobierzPodpowiedzi<%= upperCamelCase %>Blad, (state, { blad }) => ({
    ...state,
    blad: blad
  })),
  on(<%= upperCamelCase %>Actions.wyczyscListe<%= upperCamelCase %>, state => ({
    ...state,
    listaWynikow: initialState.listaWynikow
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return <%= lowerCamelCase %>Reducer(state, action);
}

export const getListaWynikow = (state: State) => state.listaWynikow;

export const getLoading = (state: State) => state.loading;

export const getBlad = (state: State) => state.blad;

export const getKryteriaWyszukiwania = (state: State) => state.kryteriaWyszukiwania;

export const getPodpowiedzi = (state: State) => state.podpowiedzi;


