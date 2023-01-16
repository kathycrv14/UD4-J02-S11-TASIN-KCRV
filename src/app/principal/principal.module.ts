import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDatosComponent } from './form-datos/form-datos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormDatosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FormDatosComponent
  ]
})
export class PrincipalModule { }
