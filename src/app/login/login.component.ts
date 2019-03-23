import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	public  email:  string  =  "";
	public  password:  string  =  "";


	constructor(private  dialog:  MatDialog, private  router:  Router) { }
	login(){
		 if(this.email  ===  "customer@gmail.com"  &&  this.password  === "customer123")
		 {
			 console.log(this.email);
			  this.router.navigate(['/customer']);
		 }
		 else if(this.email  ===  "vendor@gmail.com"  &&  this.password  === "vendor123")
		 {
			 console.log(this.email);
			  this.router.navigate(['/vendor']);
		 }
		 else if(this.email  ===  "merchandiser@gmail.com"  &&  this.password  === "merchandiser123")
		 {
			 console.log(this.email);
			  this.router.navigate(['/merchandiser']);
		 }
		 else
		 {
			  this.dialog.open(MessageComponent,{ data: { message:  "Error!!!"
			  }});
		 }
	}
}