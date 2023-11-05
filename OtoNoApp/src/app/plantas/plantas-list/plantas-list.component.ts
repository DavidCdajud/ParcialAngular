import { Component, OnInit } from '@angular/core';
import { Plantas } from '../plantas';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas: Array<Plantas> = [];
  cantidadPlantas = new Map<string, number>();

  constructor(private plantasService: PlantasService) { }

  getPlantas(): void {
    this.plantasService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  getPlantasPorTipo() : void {
    let interiorCount = 0;
    let exteriorCount = 0;
  
    this.plantasService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.plantas.forEach(planta => {
        if (planta.tipo === 'Interior') {
          interiorCount++;
        } else if (planta.tipo === 'Exterior') {
          exteriorCount++;
        }
      });
  
    });
  }
  
  ngOnInit() {
    this.getPlantas();
    this.getPlantasPorTipo();
  }
}
