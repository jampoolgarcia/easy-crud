import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public form = new FormGroup({
    id: new FormControl(0, Validators.required),
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });

  public employeeList: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA'},
    { id: 2, name: 'Angelica', country: 'USA'},
    { id: 3, name: 'Joe', country: 'USA'}
  ];

  public selectEmployee = new Employee();

  ngOnInit(): void {
    this.form.valueChanges.subscribe((res) => {
      this.selectEmployee.name = res.name || '';
      this.selectEmployee.country = res.country || '';
      this.selectEmployee.id = Number(res.id) || 0;
    });
  }

  ngOnDestroy(): void {
    
  }

  addOrEdit(): void {
    if(this.selectEmployee.id === 0) {
      this.save();
    }else{
     this.edit();
    }

    this.form.reset();
  }

  seledForEdit(employee: Employee){
    this.form.patchValue(employee);
  }

  save(){
    this.form.get('id')?.setValue(this.employeeList.length+1);
    this.employeeList.push(this.selectEmployee);
  }

  edit(){
    let index = Number(this.form.get('id')?.value) -1;
    this.employeeList[index] = Object.assign({}, this.selectEmployee);
  }

}
