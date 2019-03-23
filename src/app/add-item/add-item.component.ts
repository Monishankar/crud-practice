import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private http :HttpClient,public dialog: MatDialog) { }
  confirmationString: string="A new item has been added";
  isAdded: boolean =false;
  productObj:Object={};



  additems= function(product)
  {
    this.productObj= {
      "id" : product.id,
      "name" :product.name,
      "weight" :product.weight,
      "price" :product.price,
      "touchpad" :product.touchpad,
      "wireless" :product.wireless,
    }
    this.http.post("http://localhost:3000/items", this.productObj).subscribe((res:Response) => { this.isAdded=true;})
  }
  ngOnInit() {
  }
  
  openDialog(product): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '450px', });
        
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
 
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}