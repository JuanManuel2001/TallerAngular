import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSerie';
import { TallerService } from './Taller.service';

@Component({
  selector: 'app-Taller',
  templateUrl: './Taller.component.html',
  styleUrls: ['./Taller.component.css']
})
export class TallerComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private tallerService: TallerService) { }


  getCourseList(): Array<Serie> {
    return dataSeries;
  }


  ngOnInit() {
    this.series = this.getCourseList();
  }

}
