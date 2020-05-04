  import * as <%= cN %> from './<%= cN %>.actions';
  import { <%= CN %>Actions } from './<%= cN %>.actions';
  
  const payload: WynikWyszukiwania<%= CN %> = {
    liczbaWynikowWyszukania: 2,
  };
  const nowy<%= CN %>: Nowy<%= CN %> = { };
  
  describe('<%= CN %> Actions', () => {
    describe('[<%= CN %>] Pobierz listę <%= cN %> Actions', () => {
      describe('pobierzListe<%= CN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.pobierzListe<%= CN %>(null);
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.POBIERANIE_LISTY_<%= C_N %>
          });
        });
      });
  
      describe('pobierzListe<%= CN %>Sukces', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.pobierzListe<%= CN %>Sukces({ payload });
  
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.POBIERANIE_LISTY_<%= C_N %>_SUKCES,
            payload
          });
        });
      });
  
      describe('pobierzListe<%= CN %>Blad', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.pobierzListe<%= CN %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.POBIERANIE_LISTY_<%= C_N %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= CN %>] Usuń <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.wycofaj<%= CN %>(null);
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.USUWANIE_<%= C_N %>
          });
        });
      });
  
      describe('[<%= CN %>] Sukces usuwania <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.wycofaj<%= CN %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.USUWANIE_<%= C_N %>_SUKCES
          });
        });
      });
  
      describe('[<%= CN %>] Błąd usuwania <%= cN %>', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.wycofaj<%= CN %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.USUWANIE_<%= C_N %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= CN %>] Edytuj <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.edytuj<%= CN %>(null);
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.EDYTOWANIE_<%= C_N %>
          });
        });
      });
  
      describe('[<%= CN %>] Sukces edytowania <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.edytuj<%= CN %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.EDYTOWANIE_<%= C_N %>_SUKCES
          });
        });
      });
  
      describe('[<%= CN %>] Błąd edytowania <%= cN %>', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.edytuj<%= CN %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.EDYTOWANIE_<%= C_N %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= CN %>] Zapisz <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.zapisz<%= CN %>({ params: nowy<%= CN %> });
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.ZAPISYWANIE_<%= C_N %>,
            params: nowy<%= CN %>
          });
        });
      });
  
      describe('[<%= CN %>] Błąd zapisywania <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const blad = { message: 'Bląd' };
          const action = <%= cN %>.zapisz<%= CN %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.ZAPISYWANIE_<%= C_N %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= CN %>] Sukces zapisywania <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.zapisz<%= CN %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.ZAPISYWANIE_<%= C_N %>_SUKCES
          });
        });
      });
  
      describe('[<%= CN %>] pobierz pojedynczy <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.pobierz<%= CN %>({
            ...
          });
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.POBIERANIE_<%= C_N %>,
            ...
          });
        });
      });
  
      describe('[<%= CN %>] Błąd pobierania pojedynczego <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const blad = { message: 'Bląd' };
          const action = <%= cN %>.pobierz<%= CN %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= CN %>Actions.POBIERANIE_<%= C_N %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= CN %>] Sukces pobierania pojedynczego <%= cN %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= cN %>.pobierz<%= CN %>Sukces({ payload: payload.lista[0] });
          expect({ ...action }).toEqual({
            ...
          });
        });
      });
    });
  });
  