import { Component, OnInit } from '@angular/core';
import { Comunidad } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ccaa',
  templateUrl: './ccaa.component.html',
  styleUrls: ['./ccaa.component.sass']
})
export class CcaaComponent implements OnInit {

  comunidades: Comunidad[] = [
    {value: 'Andalucía', viewValue: 'Andalucía'},
    {value: 'Aragón', viewValue: 'Aragón'},
    {value: 'Asturias', viewValue: 'Asturias'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
