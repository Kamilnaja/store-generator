import { createAction, props } from '@ngrx/store';

  export enum <%= COMPONENT_NAME %>Actions {
    POBIERANIE_LISTY_<%= COMPONENT_NAME %> = '[<%= COMPONENT_NAME %>] Pobierz listę <%= ComponentName %>',
    POBIERANIE_LISTY_<%= COMPONENT_NAME %>_SUKCES = '[<%= COMPONENT_NAME %>] Sukces pobierania listy <%= ComponentName %>',
    POBIERANIE_LISTY_<%= COMPONENT_NAME %>_BLAD = '[<%= COMPONENT_NAME %>] Bląd pobierania listy <%= ComponentName %>',
  
    USUWANIE_<%= COMPONENT_NAME %> = '[<%= COMPONENT_NAME %>] Usuń <%= ComponentName %>',
    USUWANIE_<%= COMPONENT_NAME %>_SUKCES = '[<%= COMPONENT_NAME %>] Sukces usuwania <%= ComponentName %>',
    USUWANIE_<%= COMPONENT_NAME %>_BLAD = '[<%= COMPONENT_NAME %>] Błąd usuwania <%= ComponentName %>',
  
    EDYTOWANIE_<%= COMPONENT_NAME %> = '[<%= COMPONENT_NAME %>] Edytuj <%= ComponentName %>',
    EDYTOWANIE_<%= COMPONENT_NAME %>_SUKCES = '[<%= COMPONENT_NAME %>] Sukces edytowania <%= ComponentName %>',
    EDYTOWANIE_<%= COMPONENT_NAME %>_BLAD = '[<%= COMPONENT_NAME %>] Błąd edytowania <%= ComponentName %>',
  
    ZAPISYWANIE_<%= COMPONENT_NAME %> = '[<%= COMPONENT_NAME %>] Zapisz <%= ComponentName %>',
    ZAPISYWANIE_<%= COMPONENT_NAME %>_SUKCES = '[<%= COMPONENT_NAME %>] Sukces zapisywania <%= ComponentName %>',
    ZAPISYWANIE_<%= COMPONENT_NAME %>_BLAD = '[<%= COMPONENT_NAME %>] Błąd zapisywania <%= ComponentName %>',
  
    POBIERANIE_<%= COMPONENT_NAME %> = '[<%= COMPONENT_NAME %>] Pobierz pojedyńczy <%= ComponentName %>',
    POBIERANIE_<%= COMPONENT_NAME %>_SUKCES = '[<%= COMPONENT_NAME %>] Sukces pobierania pojedyńczego <%= ComponentName %>',
    POBIERANIE_<%= COMPONENT_NAME %>_BLAD = '[<%= COMPONENT_NAME %>] Błąd pobierania pojedyńczego <%= ComponentName %>',
  
    WYCZYSC_<%= COMPONENT_NAME %> = '[<%= COMPONENT_NAME %>] Przywrócenie inicjalnej wartości dla <%= ComponentName %> w store'
  }
  
  export const pobierzListe<%= ComponentName %> = createAction(
    <%= ComponentName %>Actions.POBIERANIE_LISTY_<%= COMPONENT_NAME %>,
    props<{numerStrony: number}>()
  );

  export const pobierzListe<%= ComponentName %>Sukces = createAction(
    <%= ComponentName %>Actions.POBIERANIE_LISTY_<%= COMPONENT_NAME %>_SUKCES,
    props<{ payload: WynikWyszukiwania<%= ComponentName %> }>()
  );

  export const pobierzListe<%= ComponentName %>Blad = createAction(
    <%= COMPONENT_NAME %>Actions.POBIERANIE_LISTY_<%= COMPONENT_NAME %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const wycofaj<%= ComponentName %> = createAction(
    <%= COMPONENT_NAME %>Actions.USUWANIE_<%= COMPONENT_NAME %>,
    props<{ idUpowaznionego: string; pochodzenie<%= ComponentName %>: Pochodzenie<%= ComponentName %> }>()
  );

  export const wycofaj<%= ComponentName %>Sukces = createAction(
    <%= ComponentName %>Actions.USUWANIE_<%= COMPONENT_NAME %>_SUKCES
  );

  export const wycofaj<%= ComponentName %>Blad = createAction(
    <%= ComponentName %>Actions.USUWANIE_<%= COMPONENT_NAME %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const edytuj<%= ComponentName %> = createAction(
    <%= ComponentName %>Actions.EDYTOWANIE_<%= COMPONENT_NAME %>, 
    props<{ params: Nowy<%= ComponentName %> }>()
  );

  export const edytuj<%= ComponentName %>Sukces = createAction(
    <%= ComponentName %>Actions.EDYTOWANIE_<%= COMPONENT_NAME %>_SUKCES
  );

  export const edytuj<%= ComponentName %>Blad = createAction(
    <%= ComponentName %>Actions.EDYTOWANIE_<%= COMPONENT_NAME %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const zapisz<%= ComponentName %> = createAction(
    <%= ComponentName %>Actions.ZAPISYWANIE_<%= COMPONENT_NAME %>, 
    props<{ params: Nowy<%= ComponentName %> }>()
  );
  
  export const zapisz<%= ComponentName %>Sukces = createAction( 
    <%= ComponentName %>Actions.ZAPISYWANIE_<%= COMPONENT_NAME %>_SUKCES
  );
  
  export const zapisz<%= ComponentName %>Blad = createAction(
    <%= ComponentName %>Actions.ZAPISYWANIE_<%= COMPONENT_NAME %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const pobierz<%= ComponentName %> = createAction(
    <%= ComponentName %>Actions.POBIERANIE_<%= COMPONENT_NAME %>,
    props<{ idUpowaznionego: string; rodzajIdentyfikatora: RodzajIdentyfikatora }>()
  );

  export const pobierz<%= ComponentName %>Sukces = createAction(
    <%= ComponentName %>Actions.POBIERANIE_<%= COMPONENT_NAME %>_SUKCES, 
    props<{ payload: <%= ComponentName %> }>()
  );

  export const pobierz<%= ComponentName %>Blad = createAction(
    <%= ComponentName %>Actions.POBIERANIE_<%= COMPONENT_NAME %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const wyczysc<%= ComponentName %> = createAction(
    <%= ComponentName %>Actions.WYCZYSC_<%= COMPONENT_NAME %>
  );
  