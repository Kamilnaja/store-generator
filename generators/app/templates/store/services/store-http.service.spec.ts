import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

describe('SlownikiHttpService', () => {
  let spectator: SpectatorHttp<<%= ComponentName %>HttpService>;
  const createHttp = createHttpFactory(<%= ComponentName %>HttpService);

  beforeEach(() => (spectator = createHttp()));

  it('Powinien wywołać akcję pobrania ...', () => {
    spectator.service.pobierzListe...().subscribe();
    spectator.expectOne('', HttpMethod.GET);
  });
});
