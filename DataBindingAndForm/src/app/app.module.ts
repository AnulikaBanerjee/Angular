import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { StudentComponent } from './records/records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
  //  TestComponentComponent,
  //  StudentComponent
  ],
  imports: [
    BrowserModule,
//    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
