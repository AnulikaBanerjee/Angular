import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnulikasApp';
  value:string="Edit me";
  isMiddleDivVisible:boolean=false;

  private toggleVisibility(){
    this.isMiddleDivVisible=!this.isMiddleDivVisible;
  }
}