import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() editTask: EventEmitter<Task> = new EventEmitter();
  constructor(private todoService:TodoService) { }
  
  isHidden:boolean = true;
  ngOnInit(): void {
  }
  show(){
    let classes = {
      'hide':!this.isHidden
    }
    return classes;
  }
  hide(){
    let classes = {
      'hide':this.isHidden
    }
    return classes;
  }
  // Set Dynamic Classes
  setClasses(){
    let classes = {
      task:true,
      'is-complete':this.task.completed
    }
    return classes;
  }
  onToggleHidden(){
    this.isHidden = !this.isHidden;
  }
  // On Toggle
  onToggle(task){
    //Toggle UI
    task.completed = !task.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(task.id).subscribe();
  }

  // On delete
  onDelete(task:Task){
    this.deleteTask.emit(task);
  }

  onEdit(task:Task){
    this.task.title=task.title;
    this.editTask.emit(this.task);
  }
}
