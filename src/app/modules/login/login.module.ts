import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }

//ng g module modules/login
