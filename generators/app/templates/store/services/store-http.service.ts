import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class <%= CN %>HttpService {
    private readonly endpointURI = ''
}

constructor(private httpClient: HttpClient) {}

public pobierzListe(): Observable<<%= CN %>[]> {
    return this.httpClient.get<<%= CN %>[]>(`${this.endpointURI}/`)
}
