import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { BoxFormComponent } from './box-form/box-form.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DeleteBoxComponent } from './delete-box/delete-box.component';
import { GenerateImageLinkComponent } from './generate-image-link/generate-image-link.component';
import { AdminGuard } from './guards/admin';
import { LoggingComponent } from './logging/logging.component';

@NgModule({
  providers: [
    AdminGuard
  ],
  declarations: [
    SigninComponent,
    HomeComponent,
    BoxFormComponent,
    DeleteProductComponent,
    DeleteBoxComponent,
    GenerateImageLinkComponent,
    LoggingComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
