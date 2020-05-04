import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class <%= CN %>Effects {
  pobierzListe<%= CN %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= CN %>Actions.pobierzListe<%= CN %>),
      switchMap(({ numerStrony }) =>
        this.<%= cN %>HttpService.pobierzListe<%= CN %>(numerStrony).pipe(
          map(payload => <%= CN %>Actions.pobierzListe<%= CN %>Sukces({ payload })),
          catchError(error =>
            of(
                <%= CN %>Actions.pobierzListe<%= CN %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  wycofaj<%= CN %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= CN %>Actions.wycofaj<%= CN %>),
      switchMap(({ idUpowaznionego, pochodzenie<%= CN %> }) =>
        this.<%= cN %>HttpService.wycofaj<%= CN %>(id, pochodzenie<%= CN %>).pipe(
          tap(() => {
            this.router.navigate(['/'], { queryParams: { usunieto: id } });
          }),
          map(() => <%= CN %>Actions.wycofaj<%= CN %>Sukces()),
          catchError(error =>
            of(
                <%= CN %>Actions.wycofaj<%= CN %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  zapisz<%= CN %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= CN %>Actions.zapisz<%= CN %>),
      switchMap(({ params }) =>
        this.<%= cN %>HttpService.zapisz<%= CN %>(params).pipe(
          tap(() => {
            this.router.navigate(['/uprawnienia/<%= cN %>']);
            this.pamiecSesjiService.wyczysc();
          }),
          map(() => <%= CN %>Actions.zapisz<%= CN %>Sukces()),
          catchError(error =>
            of(
                <%= CN %>Actions.zapisz<%= CN %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  edytuj<%= CN %> = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= CN %>Actions.edytuj<%= CN %>),
      switchMap(({ params }) =>
        this.<%= cN %>HttpService.edytuj<%= CN %>(params).pipe(
          tap(() => {
            this.router.navigate(['']);
            this.pamiecSesjiService.wyczysc();
          }),
          map(() => <%= CN %>Actions.edytuj<%= CN %>Sukces()),
          catchError(error =>
            of(
                <%= CN %>Actions.edytuj<%= CN %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  pobierz<%= CN %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= CN %>Actions.pobierz<%= CN %>),
      switchMap(({ id, rodzajIdentyfikatora }) =>
        this.<%= cN %>HttpService.pobierz<%= CN %>(id, rodzajIdentyfikatora).pipe(
          map((payload: <%= CN %>) => <%= CN %>Actions.pobierz<%= CN %>Sukces({ payload })),
          catchError(error =>
            of(
                <%= CN %>Actions.pobierz<%= CN %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private <%= cN %>HttpService: <%= CN %>HttpService,
    private router: Router,
  ) {}
}
