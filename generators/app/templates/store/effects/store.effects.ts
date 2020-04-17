import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class <%= ComponentName %>Effects {
  pobierzListe<%= ComponentName %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= ComponentName %>Actions.pobierzListe<%= ComponentName %>),
      switchMap(({ numerStrony }) =>
        this.<%= componentName %>HttpService.pobierzListe<%= ComponentName %>(numerStrony).pipe(
          map(payload => <%= ComponentName %>Actions.pobierzListe<%= ComponentName %>Sukces({ payload })),
          catchError(error =>
            of(
                <%= ComponentName %>Actions.pobierzListe<%= ComponentName %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  wycofaj<%= ComponentName %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= ComponentName %>Actions.wycofaj<%= ComponentName %>),
      switchMap(({ idUpowaznionego, pochodzenie<%= ComponentName %> }) =>
        this.<%= componentName %>HttpService.wycofaj<%= ComponentName %>(id, pochodzenie<%= ComponentName %>).pipe(
          tap(() => {
            this.router.navigate(['/'], { queryParams: { usunieto: id } });
          }),
          map(() => <%= ComponentName %>Actions.wycofaj<%= ComponentName %>Sukces()),
          catchError(error =>
            of(
                <%= ComponentName %>Actions.wycofaj<%= ComponentName %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  zapisz<%= ComponentName %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= ComponentName %>Actions.zapisz<%= ComponentName %>),
      switchMap(({ params }) =>
        this.<%= componentName %>HttpService.zapisz<%= ComponentName %>(params).pipe(
          tap(() => {
            this.router.navigate(['/uprawnienia/<%= componentName %>']);
            this.pamiecSesjiService.wyczysc();
          }),
          map(() => <%= ComponentName %>Actions.zapisz<%= ComponentName %>Sukces()),
          catchError(error =>
            of(
                <%= ComponentName %>Actions.zapisz<%= ComponentName %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  edytuj<%= ComponentName %> = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= ComponentName %>Actions.edytuj<%= ComponentName %>),
      switchMap(({ params }) =>
        this.<%= componentName %>HttpService.edytuj<%= ComponentName %>(params).pipe(
          tap(() => {
            this.router.navigate(['']);
            this.pamiecSesjiService.wyczysc();
          }),
          map(() => <%= ComponentName %>Actions.edytuj<%= ComponentName %>Sukces()),
          catchError(error =>
            of(
                <%= ComponentName %>Actions.edytuj<%= ComponentName %>Blad({
                blad: error.message
              })
            )
          )
        )
      )
    )
  );

  pobierz<%= ComponentName %>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= ComponentName %>Actions.pobierz<%= ComponentName %>),
      switchMap(({ id, rodzajIdentyfikatora }) =>
        this.<%= componentName %>HttpService.pobierz<%= ComponentName %>(id, rodzajIdentyfikatora).pipe(
          map((payload: <%= ComponentName %>) => <%= ComponentName %>Actions.pobierz<%= ComponentName %>Sukces({ payload })),
          catchError(error =>
            of(
                <%= ComponentName %>Actions.pobierz<%= ComponentName %>Blad({
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
    private <%= componentName %>HttpService: <%= ComponentName %>HttpService,
    private router: Router,
  ) {}
}
