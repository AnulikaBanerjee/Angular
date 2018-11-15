import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  private todoText:string;
  
 //  dragSrcEl = null;
  //todoService;
  constructor(private todoService:  TodoService) { 
    this.todoText='';
   // this.todoService=todoService;
  }

  private addTodo(): void{
      console.log("todo "+ this.todoText);
      this.todoService.addTodo(this.todoText);
      
      this.todoText="";

  }

  private getTodos(){
    return this.todoService.getTodos();
  }

  private delete(a:Todo){
    this.todoService.removeTodo(a);
  }

  ngOnInit() {
  }

  private toggleCheck(todo:Todo){
    todo.bool=!todo.bool;
    
    console.log(todo);

  }

}