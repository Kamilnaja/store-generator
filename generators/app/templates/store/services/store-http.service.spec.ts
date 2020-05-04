import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

describe('SlownikiHttpService', () => {
  let spectator: SpectatorHttp<<%= CN %>HttpService>;
  const createHttp = createHttpFactory(<%= CN %>HttpService);

  beforeEach(() => (spectator = createHttp()));

  it('Powinien wywołać akcję pobrania ...', () => {
    spectator.service.pobierzListe...().subscribe();
    spectator.expectOne('', HttpMethod.GET);
  });
});
