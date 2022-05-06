import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pick-csv-file',
  templateUrl: './pick-csv-file.component.html',
  styleUrls: ['./pick-csv-file.component.scss']
  
})
export class PickCsvFileComponent implements OnInit {

  @Output() fileSelected: EventEmitter<File>;

  constructor() {
    this.fileSelected = new EventEmitter<File>();
  }
  
  ngOnInit(): void {}

  public onSelectFileChange(event: any) {
    const files = event.srcElement.files as File[];

    if (files.length > 0) {
      this.fileSelected.emit(files[0]);
    }
  }

}



