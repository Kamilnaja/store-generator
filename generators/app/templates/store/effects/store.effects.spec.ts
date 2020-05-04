import * as fromActions from '../actions/<%= separate %>.actions';
import * as from<%= separate %> from './<%= separate %>.reducer';

describe('<%= separate %>Reducer', () => {
  describe('niezdefiniowany action', () => {
    it('powinien zwrocic niezdefiniowany initial state', () => {
      const { initialState } = from <%= separate %>;
      const action = {} as any;
      const state = from <%= separate %>.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('POBIERANIE_LISTY_<%= separate %> action', () => {
    it('powinien zwrocic true dla state.loading', () => {
      const { initialState } = from <%= separate %>;
      const kryteriaWyszukiwania: KryteriaWyszukiwania = {
        status: 'WYSTAWIONE'
      };
      const action = fromActions.pobierzListe<%= separate %>({ params: kryteriaWyszukiwania });
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.kryteriaWyszukiwania).toEqual(kryteriaWyszukiwania);
    });
  });

  describe('POBIERANIE_LISTY_<%= separate %>_SUKCES action', () => {
    it('Powinien wypełnić obiekt z listą wyników', () => {
      const { initialState } = fromcn;
      const listaWynikow: ListaWynikow<%= separate %> = {
        lista: [
          {
          // todo - enter here something
          }
        ],
        liczbaWynikowWyszukania: 1
      };
      const action = fromActions.pobierzList<%= separate %>Sukces({ payload: listaWynikow });
      const state = from<%= separate %>.reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state.listaWynikow).toEqual(listaWynikow);
    });
  });

  describe('POBIERANIE_LISTY_<%= separate %>_BLAD action', () => {
    it('powinien zwrocic null podczas pobierania listy <%= separate %>', () => {
      const { initialState } = from<%= separate %>;
      const action = fromActions.pobierzListe<%= separate %>Blad;
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.listaWynikow).toEqual(initialState.listaWynikow);
    });
  });

  describe('POBIERANIE_PODPOWIEDZI_<%= separate %> action', () => {
    it('powinien zwrocic true dla state.loading', () => {
      const { initialState } = from<%= separate %>;
      const action = fromActions.pobierzPodpowiedzi<%= separate %>;
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.loading).toEqual(false);
    });
  });

  describe('POBIERANIE_PODPOWIEDZI_<%= separate %>_BLAD action', () => {
    it('powinien zwrocic false dla state.loading', () => {
      const { initialState } = from<%= separate %>;
      const action = fromActions.pobierzPodpowiedzi<%= separate %>Blad;
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.loading).toEqual(false);
    });
  });

  describe('POBIERANIE_PODPOWIEDZI_<%= separate %>_SUKCES action', () => {
    it('powinien zwrocic poprawne podpowiedzi', () => {
      const { initialState } = from<%= separate %>;
      const listaPodpowiedzi: Podpowiedz[] = [
        {
          etykieta: 'etykieta podpowiedzi',
          typPodpowiedzi: 'typ podpowiedzi',
          wartoscDoWyszukania: 'wartosc do wyszkania'
        }
      ];
      const action = fromActions.pobierzPodpowiedzi<%= separate %>Sukces({ payload: listaPodpowiedzi });
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.podpowiedzi[0].etykieta).toEqual('etykieta podpowiedzi');
      expect(state.podpowiedzi[0].wartoscDoWyszukania).toEqual('wartosc do wyszkania');
      expect(state.podpowiedzi[0].typPodpowiedzi).toEqual('typ podpowiedzi');
    });
  });

  describe('POBIERANIE_SZCZEGOLOW_<%= separate %> action', () => {
    it('powinien ustawić flagę loading na true', () => {
      const { initialState } = from<%= separate %>;
      const action = fromActions.pobierzSzczegoly<%= separate %>({ id: 1 });
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.loading).toEqual(true);
    });
  });

  describe('POBIERANIE_SZCZEGOLOW_<%= separate %>_SUKCES action', () => {
    it('powinien ustawić szczegóły <%= separate %> oraz flagę loading na false', () => {
      const { initialState } = from<%= separate %>;
      const szczegoly<%= separate %> = { identyfikatorTechniczny<%= separate %>: 1 } as Szczegoly<%= separate %>;
      const action = fromActions.pobierzSzczegoly<%= separate %>Sukces({ payload: szczegoly<%= separate %> });
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.szczegoly<%= separate %>).toEqual(szczegoly<%= separate %>);
    });
  });

  describe('POBIERANIE_SZCZEGOLOW_<%= separate %>_BLAD action', () => {
    it('powinien ustawić komunikat błędu oraz flagę loading na false', () => {
      const { initialState } = from<%= separate %>;
      const blad = 'Błąd z usługi';
      const action = fromActions.pobierzSzczegoly<%= separate %>Blad({ blad });
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.blad).toEqual(blad);
    });
  });

  describe('WYCZYSC_LISTE_<%= separate %> action', () => {
    it('powinien zwrócić null podczas czyszczenia listy <%= separate %>', () => {
      const { initialState } = from<%= separate %>;
      const action = fromActions.wyczyscListe<%= separate %>();
      const state = from<%= separate %>.reducer(initialState, action);

      expect(state.listaWynikow).toEqual(initialState.listaWynikow);
    });
  });
});
