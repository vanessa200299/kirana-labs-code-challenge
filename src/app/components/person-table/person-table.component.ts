import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss'],
})
export class PersonTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  @Input() data: Person[];

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Person>;

  constructor() {
    this.displayedColumns = ['name', 'email', 'phone'];
    this.dataSource = new MatTableDataSource<Person>();
    this.data = []
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Person>(this.data);
  }

  ngAfterViewInit() {
    setTimeout(() => (this.dataSource.paginator = this.paginator));
  }

  duplicatedRow(person: Person): boolean {
    const includesRepeatedValues = (item: Person): boolean => {
      const sameName = item.name === person.name;
      const sameEmail = item.email === person.email;
      const samePhone = item.phone === person.phone;

      return sameName || sameEmail || samePhone;
    };

    const result = this.data.filter((x) => includesRepeatedValues(x));
    return result.length > 1;
  }

  isInvalidMail(email: string): boolean {
    return !email.includes('@');
  }

  isInvalidPhone(phone: number): boolean {
    return phone.toString().length !== 10;
  }
}

