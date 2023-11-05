/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PlantasListComponent } from './plantas-list.component';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 3 more rows on the tables', () => {
    component.plantas = [
      {id: '7', nombre_comun: 'Lengua amarilla', nombre_cientifico: 'Lucustrupusutrus', tipo: 'interior', altura_maxima: '15', clima: 'Templado', sustrato_siembre: 'Tierra organica roja'},
      {id: '8', nombre_comun: 'Bromelia africana', nombre_cientifico: 'Afrinatuscatuz', tipo: 'interior', altura_maxima: '10', clima: 'Calido', sustrato_siembre: 'Acuatica'},
      {id: '9', nombre_comun: 'Bambalita roja', nombre_cientifico: 'Perdum Malisus Tunum', tipo: 'interior', altura_maxima: '5', clima: 'Seco', sustrato_siembre: 'Arena'},
    ];
    fixture.detectChanges();
    var table = fixture.nativeElement.querySelector('table');
      expect(table).toBeTruthy();
      var row = table.querySelectorAll('tr');
      expect(row.length).toBe(4);
  });
});
