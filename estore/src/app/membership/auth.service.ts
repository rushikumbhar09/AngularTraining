import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;

  validate(user: string, password: string): boolean {
   
    if((user=="rushi.k@transflower.in" && password=="seed")){
      this.status= true;
      return true;
 
    }
    return false;     
 }

 logout(): any {   }
 getUser(): any {   }
 isLoggedIn(): boolean {   return false;  }
}