import { createHttpFactory, HttpMethod, SpectatorHttp, Spectator } from '@ngneat/spectator/jest';

describe('SlownikiHttpService', () => {
  let spectator: SpectatorHttp<<%= kebabCase %>HttpService>;
  const createHttp = createHttpFactory(<%= kebabCase %>HttpService);

  beforeEach(() => (spectator = createHttp()));

  it('Powinien wywołać akcję pobrania ...', () => {
    spectator.service.pobierzListe...().subscribe();
    spectator.expectOne('', HttpMethod.GET);
  });
});
