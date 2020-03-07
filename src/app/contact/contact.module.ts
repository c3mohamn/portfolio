import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class ContactModule {}
