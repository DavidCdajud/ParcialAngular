import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable, map } from 'rxjs';
import { Plantas } from './plantas';

@Injectable({ providedIn: 'root'})

export class PlantasService {

    private apiUrl: string = environment.baseUrl;

constructor(private hhtp: HttpClient) { }

getPlantas(): Observable<Plantas[]> {
    return this.hhtp.get<Plantas[]>(this.apiUrl);
    }

    getPlantasPorTipo(): Observable<any> {
        return this.getPlantas().pipe(
          map(plantas => {
            var plantasPorTipo: any = {} ;
            plantas.forEach(Plantas => {
              if (!plantasPorTipo[Plantas.tipo]) {
                plantasPorTipo[Plantas.tipo] = "interior";
              }
              plantasPorTipo[Plantas.tipo]++;
            });
            return Plantas;
          })
        );
      }

    
}
