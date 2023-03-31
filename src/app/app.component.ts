import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public index = -1;
  public form = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
  });

  public employeeList: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA'},
    { id: 1, name: 'Angelica', country: 'USA'},
    { id: 1, name: 'Joe', country: 'USA'}
  ];

  onSubmit(): void {

  }

  add(e: Employee): void {
    
  }

  idit(e: Employee): void{
  
  }

  delete(e: Employee): void {

  }

}
