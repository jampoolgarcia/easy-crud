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
    { id: 2, name: 'Angelica', country: 'USA'},
    { id: 3, name: 'Joe', country: 'USA'}
  ];

  public selectedEmployee = new Employee();

  addOrEdit(): void {
    this.selectedEmployee.id = this.employeeList.length+1;
    this.selectedEmployee.name = this.form.get('name')?.value || '';
    this.selectedEmployee.country = this.form.get('country')?.value || '';
    this.employeeList.push(this.selectedEmployee);
    this.form.reset();
  }

  delete(e: Employee): void {

  }

}
