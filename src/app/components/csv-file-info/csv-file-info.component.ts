import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-file-info',
  templateUrl: './csv-file-info.component.html',
  styleUrls: ['./csv-file-info.component.scss'],
})
export class CsvFileInfoComponent implements OnInit {
  @Input() peopleNumber: number;
  @Input() duplicatedRows: number;
 

  constructor() {}

  ngOnInit(): void {}
}
