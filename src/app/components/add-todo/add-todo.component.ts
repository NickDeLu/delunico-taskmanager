import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  @Output() addTask: EventEmitter<any> = new EventEmitter();

  title:string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      title:this.title,
      completed:false
    };
    if(todo.title!=null){
      this.addTask.emit(todo);
      this.title="";
    }
 
  }
}
