import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Plantas } from './plantas';

@Injectable({ providedIn: 'root'})

export class PlantasService {

    private apiUrl: string = environment.baseUrl;

constructor(private hhtp: HttpClient) { }

getPlantas(): Observable<Plantas[]> {
    return this.hhtp.get<Plantas[]>(this.apiUrl);
    }

}
