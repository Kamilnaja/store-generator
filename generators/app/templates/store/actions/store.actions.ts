import { createAction, props } from '@ngrx/store';

  export enum <%= upperCamelCase %>Actions {
    POBIERANIE_LISTY_<%= kebabCase %> = '[<%= separate %>] Pobierz listę <%= separate %>',
    POBIERANIE_LISTY_<%= kebabCase %>_SUKCES = '[<%= separate %>] Sukces pobierania listy <%= separate %>',
    POBIERANIE_LISTY_<%= kebabCase %>_BLAD = '[<%= separate %>] Bląd pobierania listy <%= separate %>',
  
    USUWANIE_<%= kebabCase %> = '[<%= separate %>] Usuń <%= separate %>',
    USUWANIE_<%= kebabCase %>_SUKCES = '[<%= separate %>] Sukces usuwania <%= separate %>',
    USUWANIE_<%= kebabCase %>_BLAD = '[<%= separate %>] Błąd usuwania <%= separate %>',
  
    EDYTOWANIE_<%= kebabCase %> = '[<%= separate %>] Edytuj <%= separate %>',
    EDYTOWANIE_<%= kebabCase %>_SUKCES = '[<%= separate %>] Sukces edytowania <%= separate %>',
    EDYTOWANIE_<%= kebabCase %>_BLAD = '[<%= separate %>] Błąd edytowania <%= separate %>',
  
    ZAPISYWANIE_<%= kebabCase %> = '[<%= separate %>] Zapisz <%= separate %>',
    ZAPISYWANIE_<%= kebabCase %>_SUKCES = '[<%= separate %>] Sukces zapisywania <%= separate %>',
    ZAPISYWANIE_<%= kebabCase %>_BLAD = '[<%= separate %>] Błąd zapisywania <%= separate %>',
  
    POBIERANIE_<%= kebabCase %> = '[<%= separate %>] Pobierz pojedyńczy <%= separate %>',
    POBIERANIE_<%= kebabCase %>_SUKCES = '[<%= separate %>] Sukces pobierania pojedyńczego <%= separate %>',
    POBIERANIE_<%= kebabCase %>_BLAD = '[<%= separate %>] Błąd pobierania pojedyńczego <%= separate %>',
  
    WYCZYSC_<%= kebabCase %> = '[<%= separate %>] Przywrócenie inicjalnej wartości dla <%= separate %> w store'
  }
  
  export const pobierzListe<%= upperCamelCase %> = createAction(
    <%= upperCamelCase %>Actions.POBIERANIE_LISTY_<%= kebabCase %>,
    props<{numerStrony: number}>()
  );

  export const pobierzListe<%= upperCamelCase %>Sukces = createAction(
    <%= upperCamelCase %>Actions.POBIERANIE_LISTY_<%= kebabCase %>_SUKCES,
    props<{ payload: WynikWyszukiwania<%= upperCamelCase %> }>()
  );

  export const pobierzListe<%= upperCamelCase %>Blad = createAction(
    <%= upperCamelCase %>Actions.POBIERANIE_LISTY_<%= kebabCase %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const wycofaj<%= upperCamelCase %> = createAction(
    <%= upperCamelCase %>Actions.USUWANIE_<%= kebabCase %>,
    props<{ idUpowaznionego: string; pochodzenie<%= upperCamelCase %>: Pochodzenie<%= upperCamelCase %> }>()
  );

  export const wycofaj<%= upperCamelCase %>Sukces = createAction(
    <%= upperCamelCase %>Actions.USUWANIE_<%= kebabCase %>_SUKCES
  );

  export const wycofaj<%= upperCamelCase %>Blad = createAction(
    <%= upperCamelCase %>Actions.USUWANIE_<%= kebabCase %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const edytuj<%= upperCamelCase %> = createAction(
    <%= upperCamelCase %>Actions.EDYTOWANIE_<%= kebabCase %>, 
    props<{ params: Nowy<%= upperCamelCase %> }>()
  );

  export const edytuj<%= upperCamelCase %>Sukces = createAction(
    <%= upperCamelCase %>Actions.EDYTOWANIE_<%= kebabCase %>_SUKCES
  );

  export const edytuj<%= upperCamelCase %>Blad = createAction(
    <%= upperCamelCase %>Actions.EDYTOWANIE_<%= kebabCase %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const zapisz<%= upperCamelCase %> = createAction(
    <%= upperCamelCase %>Actions.ZAPISYWANIE_<%= kebabCase %>, 
    props<{ params: Nowy<%= upperCamelCase %> }>()
  );
  
  export const zapisz<%= upperCamelCase %>Sukces = createAction( 
    <%= upperCamelCase %>Actions.ZAPISYWANIE_<%= kebabCase %>_SUKCES
  );
  
  export const zapisz<%= upperCamelCase %>Blad = createAction(
    <%= upperCamelCase %>Actions.ZAPISYWANIE_<%= kebabCase %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const pobierz<%= upperCamelCase %> = createAction(
    <%= upperCamelCase %>Actions.POBIERANIE_<%= kebabCase %>,
    props<{ idUpowaznionego: string; rodzajIdentyfikatora: RodzajIdentyfikatora }>()
  );

  export const pobierz<%= upperCamelCase %>Sukces = createAction(
    <%= upperCamelCase %>Actions.POBIERANIE_<%= kebabCase %>_SUKCES, 
    props<{ payload: <%= upperCamelCase %> }>()
  );

  export const pobierz<%= upperCamelCase %>Blad = createAction(
    <%= upperCamelCase %>Actions.POBIERANIE_<%= kebabCase %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const wyczysc<%= upperCamelCase %> = createAction(
    <%= upperCamelCase %>Actions.WYCZYSC_<%= kebabCase %>
  );
  