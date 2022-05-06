import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss'],
})
export class WelcomeMessageComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Person[];
  constructor() {
    this.displayedColumns = ['name', 'email', 'phone'];
    this.dataSource = [
      {
        name: 'Travus Juggins',
        email: 'pgravells2@amazon.com',
        phone: 7798050359,
      },
      {
        name: 'Nannette Dunstan',
        email: 'ndunstan9@mapy.cz',
        phone: 5505637459,
      },
      {
        name: 'Kerwin Nussen',
        email: 'rasquithh@nature.com',
        phone: 8676471450,
      },
      {
        name: 'Travus Juggins',
        email: 'pgravells2@amazon.com',
        phone: 7798050359,
      },
      {
        name: 'Nannette Dunstan',
        email: 'ndunstan9@mapy.cz',
        phone: 5505637459,
      },
      {
        name: 'Kerwin Nussen',
        email: 'rasquithh@nature.com',
        phone: 8676471450,
      },
      {
        name: 'Travus Juggins',
        email: 'pgravells2@amazon.com',
        phone: 7798050359,
      },
      {
        name: 'Nannette Dunstan',
        email: 'ndunstan9@mapy.cz',
        phone: 5505637459,
      },
      {
        name: 'Kerwin Nussen',
        email: 'rasquithh@nature.com',
        phone: 8676471450,
      },
    ];
  }

  ngOnInit(): void {}
}