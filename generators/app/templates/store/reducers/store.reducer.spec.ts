import { ListaWynikow<%= upperCamelCase %> } from '...interface';
import { KryteriaWyszukiwania, Podpowiedz } from '...interfaces';
import * as fromActions from '../actions/<%= name %>.actions';
import * as <%= lowerCamelCase %>Reducer from './<%= name %>.reducer';

describe('<%= upperCamelCase %>Reducer', () => {
  describe('niezdefiniowany action', () => {
    it('powinien zwrocic niezdefiniowany initial state', () => {
      const { initialState } = <%= lowerCamelCase %>Reducer;
      const action = {} as any;
      const state = <%= lowerCamelCase %>Reducer.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('POBIERANIE_LISTY_<%= kebabCase %> action', () => {
    it('powinien zwrocic true dla state.loading', () => {
      const { initialState } = <%= lowerCamelCase %>Reducer;
      const kryteriaWyszukiwania: KryteriaWyszukiwania = {
        status: 'WYSTAWIONE'
      };
      const action = fromActions.pobierzListe<%= upperCamelCase %>({ params: kryteriaWyszukiwania });
      const state = <%= upperCamelCase %>.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.kryteriaWyszukiwania).toEqual(kryteriaWyszukiwania);
    });
  });

  describe('POBIERANIE_LISTY_<%= kebabCase %>_SUKCES action', () => {
    it('Powinien wypełnić obiekt z listą wyników', () => {
      const { initialState } = <%= lowerCamelCase %>Reducer;
      const listaWynikow: ListaWynikow<%= upperCamelCase %> = {
        lista: [
          
        ],
        liczbaWynikowWyszukania: 1
      };
      const action = fromActions.pobierz<%= upperCamelCase %>Sukces({ payload: listaWynikow });
      const state = <%= upperCamelCase %>.reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state.listaWynikow).toEqual(listaWynikow);
    });
  });

  describe('POBIERANIE_LISTY_<%= kebabCase %>_BLAD action', () => {
    it('powinien zwrocic null podczas pobierania listy <%= lowerCamelCase %>', () => {
      const { initialState } = <%= lowerCamelCase %>Reducer;
      const action = fromActions.pobierzListe<%= upperCamelCase %>Blad;
      const state = <%= lowerCamelCase %>Reducer.reducer(initialState, action);

      expect(state.listaWynikow).toEqual(initialState.listaWynikow);
    });
  });

  describe('POBIERANIE_PODPOWIEDZI_<%= kebabCase %> action', () => {
    it('powinien zwrocic true dla state.loading', () => {
      const { initialState } = <%= lowerCamelCase %>Reducer;
      const action = fromActions.pobierzPodpowiedzi<%= upperCamelCase %>;
      const state = <%= lowerCamelCase %>Reducer.reducer(initialState, action);

      expect(state.loading).toEqual(false);
    });
  });

  describe('POBIERANIE_PODPOWIEDZI_<%= kebabCase %>_BLAD action', () => {
    it('powinien zwrocic false dla state.loading', () => {
      const { initialState } = <%= lowerCamelCase %>Reducer;
      const action = fromActions.pobierzPodpowiedzi<%= upperCamelCase %>Blad;
      const state = <%= lowerCamelCase %>Reducer.reducer(initialState, action);

      expect(state.loading).toEqual(false);
    });
  });

  describe('POBIERANIE_PODPOWIEDZI_<%= kebabCase %>_SUKCES action', () => {
    it('powinien zwrocic poprawne podpowiedzi', () => {
      const { initialState } = <%= lowerCamelCase %>Reducer;
      const listaPodpowiedzi: Podpowiedz[] = [
        {
          etykieta: 'etykieta podpowiedzi',
          typPodpowiedzi: 'typ podpowiedzi',
          wartoscDoWyszukania: 'wartość do wyszukania'
        }
      ];
      const action = fromActions.pobierzPodpowiedzi<%= upperCamelCase %>Sukces({ payload: listaPodpowiedzi });
      const state = <%= lowerCamelCase %>Reducer.reducer(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.podpowiedzi[0].etykieta).toEqual('etykieta podpowiedzi');
      expect(state.podpowiedzi[0].wartoscDoWyszukania).toEqual('wartość do wyszukania');
      expect(state.podpowiedzi[0].typPodpowiedzi).toEqual('typ podpowiedzi');
    });
  });
});
