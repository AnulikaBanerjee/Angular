import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms'
//import { StudentComponent} from './records/records.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'AnulikasApp';
  name:string="avg";
 
  industries = [
    {id: 1, name: "Agriculture"},
    {id: 2, name: "Manufacturing"},
    {id: 3, name: "Energy"},
    {id: 4, name: "Transportation"},
    {id: 5, name: "Finance"}
  ];

  submitCompany(form){
    console.log(form.value);
    alert("The form was submitted");
    form.reset();
  }
 // student = new StudentComponent();

  // show(bool){
  //   this.student.show(bool);
  // }
}
