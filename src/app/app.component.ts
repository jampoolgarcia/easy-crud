import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employeeList: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA'},
    { id: 1, name: 'Angelica', country: 'USA'},
    { id: 1, name: 'Joe', country: 'USA'}
  ]

  
}
