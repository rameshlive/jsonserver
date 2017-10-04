import { employee } from './employee';
import { Injectable } from '@angular/core';
import { Http ,Response ,Headers,RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {
   api_url ="http://localhost:3000/posts";
  constructor(private _http:Http) { }
  
    getEmployees() {
      
      return this._http.get(this.api_url).map((res:Response) => res.json());
    }
  
    createEmployee(newEmployee) {
      return this._http.post(this.api_url, newEmployee ).map((res: Response) => res.json());
    }

    updateEmployee(emp) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(emp);

      console.log(this.api_url + "/" + emp.id);
     
     
      return this._http.put(this.api_url + "/" + 1 , body, options ).map((res: Response) => res.json());
    }

    deleteEmployee(emp_id) {
      return this._http.delete(this.api_url +"/"+emp_id);
    }
  
}
