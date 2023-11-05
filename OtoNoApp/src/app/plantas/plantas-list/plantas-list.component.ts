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

  constructor(private plantasService: PlantasService) { }

  getPlantas(): void {
    this.plantasService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
