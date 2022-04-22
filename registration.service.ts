import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
;
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _htttp: HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any>{
  return  this._htttp.post<any>("http://localhost:8090/login",user)
  }
}
