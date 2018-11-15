import { Injectable } from '@angular/core';
import {Todo} from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[];
  private nextId:number;
  private bool:boolean;
  constructor() { 
    this.todos=[
      new Todo("Buy Apples",false),
      new Todo("Chop Apples",false),
      new Todo("Fry Potatoes",false)
    ];
   // this.nextId=3;
  }

  public addTodo(text:string):void{
    let todo= new Todo(text,false);
    this.todos.push(todo);
    this.nextId++;
    for (let index = 0; index < this.todos.length; index++) {
      console.log(this.todos[index].text);
      
    };
  }

  public getTodos():Todo[]{
    return this.todos;
  }

  public removeTodo(todo:Todo){
    this.todos.splice(this.todos.indexOf(todo),1);
    //if(this.nextId==todo.id+1){
     // this.todos.pop();
    //}
    console.log(this.todos);
  }

  
}