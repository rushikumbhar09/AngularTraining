import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export class Credential {
  constructor(public email: string, public password: string) { }
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  isValidUser: boolean = false;
  user: Credential = new Credential("rushi@abc.com", "rushi");

  constructor(private svc: AuthService) {

  }  //DI

  OnSubmit(form: any): void {
    console.log('Form submitted!');

    this.isValidUser = this.svc.validate(form.userEmail, form.userPassword);
    console.log(form.userEmail + " is a " + this.isValidUser + " User")
    if (this.isValidUser) { 
      console.log("It is a Valid User !"); 
    }
    else { 
      console.log("It is a Invalid User !"); 
    }
  }
}