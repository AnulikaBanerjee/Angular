import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
//import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoService } from './services/todo.service';
//import { StrikethroughDirective } from './components/directive/todo-strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodoService,
    //StrikethroughDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }