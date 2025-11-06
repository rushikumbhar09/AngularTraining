import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;

  validate(user: string, password: string): boolean {
   
    if((user=="rushi@abc.com" && password=="rushi")){
      localStorage.setItem('username', user);
      let status = localStorage.getItem("loggedInStatus");
      console.log("status of localstorage "+status)
      if(status=="false"){
        localStorage.setItem("loggedInStatus","true");
      }
      return true;
    }
    return false;     
 }

 logout(): any { localStorage.removeItem('username');  }
getUser(): any { 
    return localStorage.getItem('username'); 
  }
 isLoggedIn(): boolean { return this.getUser() !== null;}
}