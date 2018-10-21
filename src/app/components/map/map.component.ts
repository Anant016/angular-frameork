import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  title: string = 'My first AGM project';
  lat: number = 28.676740300000002;
  lng: number = 77.1839117;
  constructor() { }

  ngOnInit() {

  }

}
