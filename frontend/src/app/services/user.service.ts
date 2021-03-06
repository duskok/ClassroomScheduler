import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { User } from 'models/user.model';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(data) {
    return this.http.post<any>(`${environment.apiUrl}/Authentication/Register`, data);
  }

  getUser() {
    return this.http.get<any>(`${environment.apiUrl}/ManageUser/LoggedUser`);
  }

  getAllUsers() {
    return this.http.get<any>(`${environment.apiUrl}/Authentication/GetAllUsers`);
  }

  changePassword(data) {
    return this.http.post<any>(`${environment.apiUrl}/ManageUser/ChangePassword`, data);
  }

  updateUser(data) {
    return this.http.put<any>(`${environment.apiUrl}/ManageUser/UpdateUser`, data);
  }
}
