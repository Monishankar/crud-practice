import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pro-upadte',
  templateUrl: './pro-upadte.component.html',
  styleUrls: ['./pro-upadte.component.css']
})
export class ProUpadteComponent implements OnInit {
  id: number;
  data:object= {};
  products : any;
  productObj:object = {};

  private HttpHeaders =new HttpHeaders({ 'Content-Type' : 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  updateProduct (product)
  {
    
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    
    this.http.get("http://localhost:3000/items").subscribe((res:Response) => { this.products = res.json();
  
    for ( var i = 0;i < this.products.length ; i++ )

      if(parseInt(this.products[i].id)===this.id)
      { this.data = this.products[i];
      break;
    }
    }
   
  )

    

  }

}
