import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import  { catchError , tap } from 'rxjs/operators';
import {VariousType,Laptop,ComputerService} from '../information/my-service.service';



@Injectable({
  providedIn: 'root'
})


export class CustomerServiceService {
private itemUrl  = 'http://localhost:3000/items';
private itemUrl1 = 'http://localhost:3000/items1';
private itemUrl2 = 'http://localhost:3000/items2';
private itemUrl3 = 'http://localhost:3000/items3';
// private itemUrl = '../loginDB/db.json';
  
  


  constructor( private http:HttpClient) { }
  

  getlaptop(): Observable<any[]> {
    //return this.lappy;
    return this.http.get<any[]>(this.itemUrl).pipe(tap(data => console.log('All: '+JSON.stringify(data))),
   catchError(this.handleError)
   )
  };
  getmobile(): Observable<any[]> {
    
    return this.http.get<any[]>(this.itemUrl1).pipe(tap(data => console.log('All: '+JSON.stringify(data))),
   catchError(this.handleError)
   )
  };
  gettab(): Observable<any[]> {
   
    return this.http.get<any[]>(this.itemUrl2).pipe(tap(data => console.log('All: '+JSON.stringify(data))),
   catchError(this.handleError)
   )
  };
  getheadphone(): Observable<any[]> {
    
    return this.http.get<any[]>(this.itemUrl3).pipe(tap(data => console.log('All: '+JSON.stringify(data))),
   catchError(this.handleError)
   )
  };
  
  private handleError(err : HttpErrorResponse){
  let errorMessage ='';
  if(err.error instanceof ErrorEvent)
  {
    errorMessage ='An error occured: ${err.error.message}';
  }
  else{
    errorMessage = 'Server returned code: ${err.status}, error message is : ${err.message}';
  }
  console.error(errorMessage);
  return throwError(errorMessage);

}
//  getmobile() : any {
//    return this.mob;
//   }
//   gettab(): any {
//     return this.tab;
//   }
//   headphone(): any {
//     return this.headset;
//   }

}
