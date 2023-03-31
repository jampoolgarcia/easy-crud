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
    id: new FormControl(''),
    name: new FormControl(''),
    country: new FormControl(''),
  });

  public employeeList: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA'},
    { id: 2, name: 'Angelica', country: 'USA'},
    { id: 3, name: 'Joe', country: 'USA'}
  ];

  public selectEmployee = new Employee();

  addOrEdit(): void {
    this.form.get('id')?.setValue(`${this.employeeList.length+1}`);

    this.selectEmployee = {
      id: Number(this.form.get('id')?.value) || -1,
      name: this.form.get('name')?.value || '',
      country: this.form.get('country')?.value || ''
    }

    this.employeeList.push(this.selectEmployee);

    this.form.reset();
  }

  seledForEdit(employee: Employee){
    this.selectEmployee = employee;
    this.form.get('id')?.setValue(`${employee.id}`);
    this.form.get('name')?.setValue(employee.name);
    this.form.get('country')?.setValue(employee.country);
  }

  delete(employee: Employee): void {

  }

}
