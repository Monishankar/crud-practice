import { Component, OnInit } from '@angular/core';
import { Type }  from '@angular/compiler';
import { CustomerServiceService } from '../customer/customer-service.service';
import { VariousType,Laptop } from '../information/my-service.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  type      : VariousType[];
  val       : Type;

  names     : VariousType[];
  iniVal    : string;
  iniFunc   : Laptop[];

  dataSource:any;
 

  displayedColumns: string[] = ['id', 'name', 'weight', 'price','touchpad' ,'wireless' , 'delete'];

  ngOnInit(){

    // this.type =[      {  naming : 'Laptop' }           
    //            ] ;

         this.type =[ {  naming :  'Laptop'    },
                      {  naming :  'Mobile'    },
                      {  naming :  'Tab'       },
                      {  naming :  'Headphone' }
                ] ;
    this.iniVal="Laptop";
    this.iniFunc = this.onProductSelect('Laptop');       
  }
  
  constructor(private CustomerServiceService: CustomerServiceService, private http :HttpClient, route: Router) {

  }
  id: number;y
  
  private HttpHeaders =new HttpHeaders({ 'Content-Type' : 'application/json'});
  

  // getlaptop = function () :Observable<any[]>{
  //   //return this.lappy
  //     return this.http.get("http://localhost:3000/items").subscribe( (res: Response) => {this.products =res.json();
  //   }
  //   )
  // }

       
    onProductSelect = function(val):any {
        if(val=='Laptop') {
          this.dataSource = this.CustomerServiceService.getlaptop();
          console.log(this.dataSource);
          this.delPro = function (id: any ,val:any) 
          {
            if(confirm ("Are you sure want to delete ??")  )
    
            {
              const url =`${"http://localhost:3000/items"}/${id}`;
              return this.http.delete(url, { headers : this.HttpHeaders}).toPromise().then( () => {console.log ( this.onProductSelect('Laptop'));
                
              }) 
            }
        }
      }
         else if(val=='Mobile')
        { 
          this.dataSource = this.CustomerServiceService.getmobile();
          console.log(this.dataSource);
          this.delPro = function (id: any ,val:any) 
          {
            if(confirm ("Are you sure want to delete ??")  )
    
            {
              const url =`${"http://localhost:3000/items1"}/${id}`;
              return this.http.delete(url, { headers : this.HttpHeaders}).toPromise().then( () => {console.log ( this.onProductSelect('Mobile'));
                
              }) 
            }
        }
        }
        else if (val=='Tab')
        { 
          this.dataSource = this.CustomerServiceService.gettab();
          console.log(this.dataSource);
          this.delPro = function (id: any ,val:any) 
          {
            if(confirm ("Are you sure want to delete ??")  )
    
            {
              const url =`${"http://localhost:3000/items2"}/${id}`;
              return this.http.delete(url, { headers : this.HttpHeaders}).toPromise().then( () => {console.log ( this.onProductSelect('Tab'));
                
              }) 
            }
        }
        }
        else if (val=='Headphone')
        { 
          this.dataSource = this.CustomerServiceService.getheadphone();
          console.log(this.dataSource);
          this.delPro = function (id: any ,val:any) 
          {
            if(confirm ("Are you sure want to delete ??")  )
    
            {
              const url =`${"http://localhost:3000/items3"}/${id}`;
              return this.http.delete(url, { headers : this.HttpHeaders}).toPromise().then( () => {console.log ( this.onProductSelect('Headphone'));
                
              }) 
            }
        }
        }
        
      }
}        
