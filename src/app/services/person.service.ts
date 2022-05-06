import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  public csvToPerson(data: string[]): Person[] {
    const personList: Person[] = [];
    for (const item of data) {
      if (item !== '') {
        const personalData = item.split(',');
        personList.push({
          name: personalData[0],
          email: personalData[1],
          phone: Number(personalData[2]),
        });
      }
    }

    return personList;
  }

  public removeDuplicates(persons: Person[]): Person[] {
    return persons.filter(
      (person, index, self) =>
        index === self.findIndex((p) => this.personComparer(p, person))
    );
  }

  private personComparer(a: Person, b: Person): boolean {
    const sameName = a.name === b.name;
    const sameEmail = a.email === b.email;
    const samePhone = a.phone === b.phone;

    return sameName && sameEmail && samePhone;
  }
}
