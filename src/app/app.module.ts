import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from './service/form.service';
import { FormListComponent } from './form-list/form-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    FormListComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
