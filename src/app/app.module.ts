import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule} from '@angular/material/divider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule,MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';





import { CustomerServiceService } from './customer/customer-service.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorComponent } from './vendor/vendor.component';
import { MerchandiserComponent } from './merchandiser/merchandiser.component';
import { BodyComponent } from './body/body.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { ComputerService } from './information/my-service.service';
import { AddItemComponent } from './add-item/add-item.component';
import { ProUpadteComponent } from './pro-upadte/pro-upadte.component';
import { DialogOverviewExampleDialog} from './add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    VendorComponent,
    MerchandiserComponent,
    BodyComponent,
    InformationComponent,
    LoginComponent,
    MessageComponent,
    AddItemComponent,
    ProUpadteComponent,
    DialogOverviewExampleDialog,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,MatDialogModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      { path:'app' , component: AppComponent },
      { path:'' , component: BodyComponent },
      { path:'info' , component: InformationComponent },
      { path:'body' , component: BodyComponent },
      { path:'login' , component: LoginComponent },
      { path:'merchandiser' , component: MerchandiserComponent },
      { path:'vendor' , component: VendorComponent },
      { path:'customer' , component: CustomerComponent },
      { path:'addItems' , component: AddItemComponent },
      { path:"updateProduct/:id" , component: ProUpadteComponent },
      
  ]),
  ],
  entryComponents: [AddItemComponent, DialogOverviewExampleDialog],
  providers: [ComputerService,CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
