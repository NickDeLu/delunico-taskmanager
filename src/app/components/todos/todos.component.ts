import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TodoService } from '../../services/todo.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  tasks:Task[];
  listId:number;
  showFiller = true;
  constructor(private todoService:TodoService,private listService:ListService) { }

  ngOnInit(): void {
    this.listService.getLists().subscribe(lists=>{
      console.log(lists[0].id);
      this.listId = lists[0].id;
      this.getTasks();
    })
  }
  getTasks():void{
    this.todoService.getTasks(this.listId).subscribe(tasks =>{
      this.tasks = tasks;
    });
  }
  onLoadTasks(list){
    this.listId = list.id;
    this.getTasks();
  }
  deleteTask(task:Task){
    // Remove form UI
    this.tasks = this.tasks.filter(t =>
    t.id !== task.id
    );
    // Remove from server
    this.todoService.deleteTask(task.id).subscribe();
  }

  addTask(task:Task){
    task.listId=this.listId;
    this.todoService.addTask(task).subscribe( ()=>{
      this.getTasks();
    })
  }

  editTask(task:Task){
    this.todoService.editTask(task).subscribe( (updatedTask)=>{
      this.tasks[this.tasks.indexOf(task)] = updatedTask;
      this.getTasks();
    })
  }
}
