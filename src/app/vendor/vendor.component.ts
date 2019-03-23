import { Component, OnInit } from '@angular/core';
import {VariousType,Laptop,ComputerService} from '../information/my-service.service';
import {Type }  from '@angular/compiler';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  type      : VariousType[];
  val       : Type;

  names     : VariousType[];
  iniVal    : string;
  iniFunc   : Laptop[];

  dataSource:any;
 

  displayedColumns: string[] = ['id', 'name', 'weight', 'price','touchpad' ,'wireless'];

  ngOnInit(){
    

    this.type =[      {  naming :  'Laptop'    },
                      {  naming :  'Mobile'    },
                      {  naming :  'Tab'       },
                      {  naming :  'Headphone' }
                ] ;
    this.iniVal="Mobile";
    this.iniFunc = this.onProductSelect('Mobile');       
  }
  
  
  constructor(private computerService: ComputerService) {

  }

      
    onProductSelect(val):any{
        if(val=='Laptop') {
          this.dataSource = this.computerService.getlaptop();
          console.log(this.dataSource);
        }
        else if(val=='Mobile')
        { 
          this.dataSource = this.computerService.getmobile();
        }
        else if (val=='Tab')
        { 
          this.dataSource = this.computerService.gettab();
        }
        else if (val=='Headphone')
        { 
          this.dataSource = this.computerService.headphone();
        }
                             
      }
      
}        
