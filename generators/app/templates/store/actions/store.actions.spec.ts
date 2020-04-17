  import * as <%= componentName %> from './<%= componentName %>.actions';
  import { <%= ComponentName %>Actions } from './<%= componentName %>.actions';
  
  const payload: WynikWyszukiwania<%= ComponentName %> = {
    liczbaWynikowWyszukania: 2,
  };
  const nowy<%= ComponentName %>: Nowy<%= ComponentName %> = { };
  
  describe('<%= ComponentName %> Actions', () => {
    describe('[<%= ComponentName %>] Pobierz listę <%= componentName %> Actions', () => {
      describe('pobierzListe<%= ComponentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.pobierzListe<%= ComponentName %>(null);
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.POBIERANIE_LISTY_<%= COMPONENT_NAME %>
          });
        });
      });
  
      describe('pobierzListe<%= ComponentName %>Sukces', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.pobierzListe<%= ComponentName %>Sukces({ payload });
  
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.POBIERANIE_LISTY_<%= COMPONENT_NAME %>_SUKCES,
            payload
          });
        });
      });
  
      describe('pobierzListe<%= ComponentName %>Blad', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.pobierzListe<%= ComponentName %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.POBIERANIE_LISTY_<%= COMPONENT_NAME %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= ComponentName %>] Usuń <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.wycofaj<%= ComponentName %>(null);
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.USUWANIE_<%= COMPONENT_NAME %>
          });
        });
      });
  
      describe('[<%= ComponentName %>] Sukces usuwania <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.wycofaj<%= ComponentName %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.USUWANIE_<%= COMPONENT_NAME %>_SUKCES
          });
        });
      });
  
      describe('[<%= ComponentName %>] Błąd usuwania <%= componentName %>', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.wycofaj<%= ComponentName %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.USUWANIE_<%= COMPONENT_NAME %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= ComponentName %>] Edytuj <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.edytuj<%= ComponentName %>(null);
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.EDYTOWANIE_<%= COMPONENT_NAME %>
          });
        });
      });
  
      describe('[<%= ComponentName %>] Sukces edytowania <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.edytuj<%= ComponentName %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.EDYTOWANIE_<%= COMPONENT_NAME %>_SUKCES
          });
        });
      });
  
      describe('[<%= ComponentName %>] Błąd edytowania <%= componentName %>', () => {
        const blad = { message: 'Bląd' };
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.edytuj<%= ComponentName %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.EDYTOWANIE_<%= COMPONENT_NAME %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= ComponentName %>] Zapisz <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.zapisz<%= ComponentName %>({ params: nowy<%= ComponentName %> });
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.ZAPISYWANIE_<%= COMPONENT_NAME %>,
            params: nowy<%= ComponentName %>
          });
        });
      });
  
      describe('[<%= ComponentName %>] Błąd zapisywania <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const blad = { message: 'Bląd' };
          const action = <%= componentName %>.zapisz<%= ComponentName %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.ZAPISYWANIE_<%= COMPONENT_NAME %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= ComponentName %>] Sukces zapisywania <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.zapisz<%= ComponentName %>Sukces();
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.ZAPISYWANIE_<%= COMPONENT_NAME %>_SUKCES
          });
        });
      });
  
      describe('[<%= ComponentName %>] pobierz pojedynczy <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.pobierz<%= ComponentName %>({
            ...
          });
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.POBIERANIE_<%= COMPONENT_NAME %>,
            ...
          });
        });
      });
  
      describe('[<%= ComponentName %>] Błąd pobierania pojedynczego <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const blad = { message: 'Bląd' };
          const action = <%= componentName %>.pobierz<%= ComponentName %>Blad({ blad });
          expect({ ...action }).toEqual({
            type: <%= ComponentName %>Actions.POBIERANIE_<%= COMPONENT_NAME %>_BLAD,
            blad
          });
        });
      });
  
      describe('[<%= ComponentName %>] Sukces pobierania pojedynczego <%= componentName %>', () => {
        it('powinno utworzyć akcję', () => {
          const action = <%= componentName %>.pobierz<%= ComponentName %>Sukces({ payload: payload.lista[0] });
          expect({ ...action }).toEqual({
            ...
          });
        });
      });
    });
  });
  