import { createAction, props } from '@ngrx/store';

  export enum <%= C_N %>Actions {
    POBIERANIE_LISTY_<%= C_N %> = '[<%= C_N %>] Pobierz listę <%= CN %>',
    POBIERANIE_LISTY_<%= C_N %>_SUKCES = '[<%= C_N %>] Sukces pobierania listy <%= CN %>',
    POBIERANIE_LISTY_<%= C_N %>_BLAD = '[<%= C_N %>] Bląd pobierania listy <%= CN %>',
  
    USUWANIE_<%= C_N %> = '[<%= C_N %>] Usuń <%= CN %>',
    USUWANIE_<%= C_N %>_SUKCES = '[<%= C_N %>] Sukces usuwania <%= CN %>',
    USUWANIE_<%= C_N %>_BLAD = '[<%= C_N %>] Błąd usuwania <%= CN %>',
  
    EDYTOWANIE_<%= C_N %> = '[<%= C_N %>] Edytuj <%= CN %>',
    EDYTOWANIE_<%= C_N %>_SUKCES = '[<%= C_N %>] Sukces edytowania <%= CN %>',
    EDYTOWANIE_<%= C_N %>_BLAD = '[<%= C_N %>] Błąd edytowania <%= CN %>',
  
    ZAPISYWANIE_<%= C_N %> = '[<%= C_N %>] Zapisz <%= CN %>',
    ZAPISYWANIE_<%= C_N %>_SUKCES = '[<%= C_N %>] Sukces zapisywania <%= CN %>',
    ZAPISYWANIE_<%= C_N %>_BLAD = '[<%= C_N %>] Błąd zapisywania <%= CN %>',
  
    POBIERANIE_<%= C_N %> = '[<%= C_N %>] Pobierz pojedyńczy <%= CN %>',
    POBIERANIE_<%= C_N %>_SUKCES = '[<%= C_N %>] Sukces pobierania pojedyńczego <%= CN %>',
    POBIERANIE_<%= C_N %>_BLAD = '[<%= C_N %>] Błąd pobierania pojedyńczego <%= CN %>',
  
    WYCZYSC_<%= C_N %> = '[<%= C_N %>] Przywrócenie inicjalnej wartości dla <%= CN %> w store'
  }
  
  export const pobierzListe<%= CN %> = createAction(
    <%= CN %>Actions.POBIERANIE_LISTY_<%= C_N %>,
    props<{numerStrony: number}>()
  );

  export const pobierzListe<%= CN %>Sukces = createAction(
    <%= CN %>Actions.POBIERANIE_LISTY_<%= C_N %>_SUKCES,
    props<{ payload: WynikWyszukiwania<%= CN %> }>()
  );

  export const pobierzListe<%= CN %>Blad = createAction(
    <%= C_N %>Actions.POBIERANIE_LISTY_<%= C_N %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const wycofaj<%= CN %> = createAction(
    <%= C_N %>Actions.USUWANIE_<%= C_N %>,
    props<{ idUpowaznionego: string; pochodzenie<%= CN %>: Pochodzenie<%= CN %> }>()
  );

  export const wycofaj<%= CN %>Sukces = createAction(
    <%= CN %>Actions.USUWANIE_<%= C_N %>_SUKCES
  );

  export const wycofaj<%= CN %>Blad = createAction(
    <%= CN %>Actions.USUWANIE_<%= C_N %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const edytuj<%= CN %> = createAction(
    <%= CN %>Actions.EDYTOWANIE_<%= C_N %>, 
    props<{ params: Nowy<%= CN %> }>()
  );

  export const edytuj<%= CN %>Sukces = createAction(
    <%= CN %>Actions.EDYTOWANIE_<%= C_N %>_SUKCES
  );

  export const edytuj<%= CN %>Blad = createAction(
    <%= CN %>Actions.EDYTOWANIE_<%= C_N %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const zapisz<%= CN %> = createAction(
    <%= CN %>Actions.ZAPISYWANIE_<%= C_N %>, 
    props<{ params: Nowy<%= CN %> }>()
  );
  
  export const zapisz<%= CN %>Sukces = createAction( 
    <%= CN %>Actions.ZAPISYWANIE_<%= C_N %>_SUKCES
  );
  
  export const zapisz<%= CN %>Blad = createAction(
    <%= CN %>Actions.ZAPISYWANIE_<%= C_N %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const pobierz<%= CN %> = createAction(
    <%= CN %>Actions.POBIERANIE_<%= C_N %>,
    props<{ idUpowaznionego: string; rodzajIdentyfikatora: RodzajIdentyfikatora }>()
  );

  export const pobierz<%= CN %>Sukces = createAction(
    <%= CN %>Actions.POBIERANIE_<%= C_N %>_SUKCES, 
    props<{ payload: <%= CN %> }>()
  );

  export const pobierz<%= CN %>Blad = createAction(
    <%= CN %>Actions.POBIERANIE_<%= C_N %>_BLAD, 
    props<{ blad: any }>()
  );
  
  export const wyczysc<%= CN %> = createAction(
    <%= CN %>Actions.WYCZYSC_<%= C_N %>
  );
  