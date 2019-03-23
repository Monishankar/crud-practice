import { Component,Inject, Injectable, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }
  public  closeMe() {
      this.dialogRef.close();
  }
}