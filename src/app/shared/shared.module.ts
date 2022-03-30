import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseInputFieldComponent } from './components/base-input-field/base-input-field.component';
@NgModule({
  declarations: [
    BaseButtonComponent,
    BaseInputFieldComponent,
    BaseButtonComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    BaseInputFieldComponent,
    BaseButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
