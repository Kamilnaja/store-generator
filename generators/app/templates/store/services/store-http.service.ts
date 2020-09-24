import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class <%= upperCamelCase %>HttpService {
    private readonly endpointURI = '';

    constructor(private httpClient: HttpClient) {}
    
    public pobierzListe(): Observable<<%= kebabCase %>[]> {
        return this.httpClient.get<<%= kebabCase %>[]>(`${this.endpointURI}/`)
    }
}
