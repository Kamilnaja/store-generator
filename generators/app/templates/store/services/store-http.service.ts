import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class <%= ComponentName %>HttpService {
    private readonly endpointURI = ''
}

constructor(private httpClient: HttpClient) {}

public pobierzListe(): Observable<<%= ComponentName %>[]> {
    return this.httpClient.get<<%= ComponentName %>[]>(`${this.endpointURI}/`)
}
