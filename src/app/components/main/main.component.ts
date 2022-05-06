import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public persons: Person[];
  public duplicatedRows: number;

  constructor(private personService: PersonService) {
    this.persons = [];
    this.duplicatedRows = 0;
  }

  ngOnInit(): void {}

  public onLoadCSVFile(file: File) {
    this.readCSVFile(file);
  }

  private readCSVFile(file: File): void {
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      let csvData = reader.result;
      let readResult = (<string>csvData).split(/\r\n|\n/);
      this.csvInfoToModel(readResult.splice(1));
    };

    reader.onerror = function () {
      alert('error is occured while reading file!');
    };
  }

  private csvInfoToModel(data: string[]) {
    const personList = this.personService.csvToPerson(data);
    this.persons = this.personService.removeDuplicates(personList);

    this.duplicatedRows = personList.length - this.persons.length;
  }

  public reset() {
    this.persons = [];
  }
}
