import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterInput: string = "";
  private personListArr: Person[] = [
    new Person("Tom Jerry", true),
    new Person("Winnie The Pooh", false),
    new Person("Mickey Mouse", true)
  ];
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }
  constructor(private http: HttpClient) { }

  getPerson(): Person[] {
    this.delay(4000).then(any => { return Person });
    return this.personListArr.filter((personfilter) => {
      return personfilter.getName().toLowerCase().includes(this.filterInput.toLowerCase());

    });
  }
  setFilter(formInput: string): void {

    this.filterInput = formInput;
  }

  getTasks(): Observable<any> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
