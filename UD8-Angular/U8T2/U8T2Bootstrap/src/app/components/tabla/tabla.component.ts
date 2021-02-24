import { Component, OnInit } from '@angular/core';
import { ComunidadElement } from '../../interfaces/interfaces';
import { VacunacionService } from '../../services/vacunacion.service';

const ELEMENT_DATA: ComunidadElement[] = [
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['comunidad', 'dEntregadas', 'dAdmin', 'dCompleta', 'pEntregadas', 'pPoblAdmin', 'pPoblCompleta'];
  dataSource = ELEMENT_DATA;

  constructor(public _vacunacion: VacunacionService) { }

  vacunacion() {}

  click() {
    console.log("click");
    this._vacunacion.vacunacion.subscribe((response) => {
      console.log(response);
      this.dataSource = response;
    });
  }

  ngOnInit(): void {
  }

}
