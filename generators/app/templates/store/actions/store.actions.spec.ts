  import { <%= separate %>Actions } from './<%= separate %>.actions';
  
  const payload: WynikWyszukiwania<%= separate %> = {
    liczbaWynikowWyszukania: 2,
  };
  const nowy<%= separate %>: Nowy<%= separate %> = { };
  
  describe('<%= separate %> Actions', () => {
    describe('[<%= separate %>] Pobierz listę <%= separate %> Actions', () => {
      describe('pobierzListe<%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= upperCamelCase %>.pobierzListe<%= upperCamelCase %>(null);
          expect({ ...action }).toEqual({
            type: <%= upperCamelCase %>Actions.POBIERANIE_LISTY_<%= kebabCase %>
          });
        });
      });
  
      describe('pobierzListe<%= separate %>Sukces', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.pobierzListe<%= separate %>Sukces({ payload });
  
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.POBIERANIE_LISTY_<%= kebabCase %>_SUKCES,
            payload
          });
        });
      });
  
      describe('pobierzListe<%= separate %>Blad', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= upperCamelCase %>.pobierzListe<%= separate %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= upperCamelCase %>Actions.POBIERANIE_LISTY_<%= kebabCase %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= separate %>] Usuń <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.wycofaj<%= separate %>(null);
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.USUWANIE_<%= kebabCase %>
          });
        });
      });
  
      describe('[<%= separate %>] Sukces usuwania <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.wycofaj<%= separate %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.USUWANIE_<%= kebabCase %>_SUKCES
          });
        });
      });
  
      describe('[<%= separate %>] Błąd usuwania <%= separate %>', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.wycofaj<%= separate %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.USUWANIE_<%= kebabCase %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= separate %>] Edytuj <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.edytuj<%= separate %>(null);
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.EDYTOWANIE_<%= kebabCase %>
          });
        });
      });
  
      describe('[<%= separate %>] Sukces edytowania <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.edytuj<%= separate %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.EDYTOWANIE_<%= kebabCase %>_SUKCES
          });
        });
      });
  
      describe('[<%= separate %>] Błąd edytowania <%= separate %>', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.edytuj<%= separate %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.EDYTOWANIE_<%= kebabCase %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= separate %>] Zapisz <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.zapisz<%= separate %>({ params: nowy<%= separate %> });
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.ZAPISYWANIE_<%= kebabCase %>,
            params: nowy<%= separate %>
          });
        });
      });
  
      describe('[<%= separate %>] Błąd zapisywania <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const blad = { message: 'Bląd' };
          const action = <%= separate %>.zapisz<%= separate %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.ZAPISYWANIE_<%= kebabCase %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= separate %>] Sukces zapisywania <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.zapisz<%= separate %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.ZAPISYWANIE_<%= kebabCase %>_SUKCES
          });
        });
      });
  
      describe('[<%= separate %>] pobierz pojedynczy <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.pobierz<%= separate %>({
            ...
          });
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.POBIERANIE_<%= kebabCase %>,
            ...
          });
        });
      });
  
      describe('[<%= separate %>] Błąd pobierania pojedynczego <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const blad = { message: 'Bląd' };
          const action = <%= separate %>.pobierz<%= separate %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= separate %>Actions.POBIERANIE_<%= kebabCase %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= separate %>] Sukces pobierania pojedynczego <%= separate %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= separate %>.pobierz<%= separate %>Sukces({ payload: payload.lista[0] });
          expect({ ...action }).toEqual({
            ...
          });
        });
      });
    });
  });
  