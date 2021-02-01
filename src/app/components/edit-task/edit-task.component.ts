import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Task} from '../../models/Task';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @Output() editTask: EventEmitter<any> = new EventEmitter();
  
  title:string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
   const task = {
    title:this.title
   }
    this.editTask.emit(task);
  }
}
