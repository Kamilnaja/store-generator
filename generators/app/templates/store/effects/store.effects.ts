import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class <%= separate %>Effects {
  pobierzListe<%= separate %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= separate %>Actions.pobierzListe<%= separate %>),
      switchMap(({ numerStrony }) =>
        this.<%= separate %>HttpService.pobierzListe<%= separate %>(numerStrony).pipe(
          map(payload => <%= separate %>Actions.pobierzListe<%= separate %>Sukces({ payload })),
          catchError(error =>
            of(
                <%= separate %>Actions.pobierzListe<%= separate %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  wycofaj<%= separate %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= separate %>Actions.wycofaj<%= separate %>),
      switchMap(({ idUpowaznionego, pochodzenie<%= separate %> }) =>
        this.<%= separate %>HttpService.wycofaj<%= separate %>(id, pochodzenie<%= separate %>).pipe(
          tap(() => {
            this.router.navigate(['/'], { queryParams: { usunieto: id } });
          }),
          map(() => <%= separate %>Actions.wycofaj<%= separate %>Sukces()),
          catchError(error =>
            of(
                <%= separate %>Actions.wycofaj<%= separate %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  zapisz<%= separate %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= separate %>Actions.zapisz<%= separate %>),
      switchMap(({ params }) =>
        this.<%= separate %>HttpService.zapisz<%= separate %>(params).pipe(
          tap(() => {
            this.router.navigate(['/uprawnienia/<%= separate %>']);
            this.pamiecSesjiService.wyczysc();
          }),
          map(() => <%= separate %>Actions.zapisz<%= separate %>Sukces()),
          catchError(error =>
            of(
                <%= separate %>Actions.zapisz<%= separate %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  edytuj<%= separate %> = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= separate %>Actions.edytuj<%= separate %>),
      switchMap(({ params }) =>
        this.<%= separate %>HttpService.edytuj<%= separate %>(params).pipe(
          tap(() => {
            this.router.navigate(['']);
            this.pamiecSesjiService.wyczysc();
          }),
          map(() => <%= separate %>Actions.edytuj<%= separate %>Sukces()),
          catchError(error =>
            of(
                <%= separate %>Actions.edytuj<%= separate %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  pobierz<%= separate %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= separate %>Actions.pobierz<%= separate %>),
      switchMap(({ id, rodzajIdentyfikatora }) =>
        this.<%= separate %>HttpService.pobierz<%= separate %>(id, rodzajIdentyfikatora).pipe(
          map((payload: <%= separate %>) => <%= separate %>Actions.pobierz<%= separate %>Sukces({ payload })),
          catchError(error =>
            of(
                <%= separate %>Actions.pobierz<%= separate %>Blad({
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
    private <%= separate %>HttpService: <%= separate %>HttpService,
    private router: Router,
  ) {}
}
