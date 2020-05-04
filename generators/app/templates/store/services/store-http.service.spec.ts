import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

describe('SlownikiHttpService', () => {
  let spectator: SpectatorHttp<<%= kebabCase %>HttpService>;
  const createHttp = createHttpFactory(<%= kebabCase %>HttpService);

  beforeEach(() => (spectator = createHttp()));

  it('Powinien wywołać akcję pobrania ...', () => {
    spectator.service.pobierzListe...().subscribe();
    spectator.expectOne('', HttpMethod.GET);
  });
});
