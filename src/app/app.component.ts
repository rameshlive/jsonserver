import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { EmployeeService } from './employee.service';
import { Component ,} from '@angular/core';
import { employee } from './employee';

@Component({
  selector: 'app-root',
  template:`
  <h1>Angular2 HTTP Demo App</h1>
  <h2>Employees</h2>
  <div class="container">
        <table class="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th></th>
          </tr>
        </thead>
          <tr *ngFor="let result of results">
            <td> {{result.id}} </td>
            <td> <input type="text" class="form-control" id="title" value="{{result.title}}" name="title"/> </td>
            <td> {{result.author}} </td>
            <td> <button type="button" class="btn btn-warning" (click)="updateEmployee(result)"> update</button> </td>
            <td> <button type="button" class="btn btn-success" (click)="deleteEmployee(result)"> delete</button> </td>
          </tr>
        </table>
  
  <a  id="btn" (click)="createEmployee()"> create Employee</a>  
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  results;
  constructor(private _empService:EmployeeService){}

  ngOnInit() {
   this.getEmployees();
  } 

  getEmployees() {
    this._empService.getEmployees().subscribe(
      data => { this.results = data}
      
    );
  }

  createEmployee() {
    let newEmployee = {
        title: "test",
        author : "tgfdgfdgfg"
    };
    this._empService.createEmployee(newEmployee).subscribe(
       data => {
         // refresh the list
         this.getEmployees();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

  updateEmployee(emp){
    this._empService.updateEmployee(emp).subscribe(
      data => {
        // refresh the list
        this.getEmployees();
        return true;
      },
      error => {
        console.error("Error saving food!");
        return Observable.throw(error);
      }
   );
  }

  deleteEmployee(emp){
    this._empService.deleteEmployee(emp.id).subscribe(
      data => {
        // refresh the list
        this.getEmployees();
        return true;
      },
      error => {
        console.error("Error deleting food!");
        return Observable.throw(error);
      }
   );;
  }
}
