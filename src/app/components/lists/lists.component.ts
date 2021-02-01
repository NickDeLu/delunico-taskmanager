import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../models/List';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists:List[];
  @Output() updateTasks: EventEmitter<List> = new EventEmitter();
  constructor(private listService:ListService) { }

  ngOnInit(): void {
    this.getLists();
  }
  getLists():void{
    this.listService.getLists().subscribe(lists =>{
      this.lists = lists;
    });
  }
  onLoadTasks(list){
    this.updateTasks.emit(list);
  }

  deleteList(list:List){
    // Remove form UI
    this.onLoadTasks(this.lists[0]);
    this.lists = this.lists.filter(l =>
    l.id !== list.id
    );
    // Remove from server
    this.listService.deleteList(list.id).subscribe();
  }
  
  addList(list:List){
    this.listService.addList(list).subscribe( ()=>{
      this.getLists();
    })
  }

  editList(list:List){
    this.listService.updateList(list).subscribe( ()=>{
      this.getLists();
    })
  }
}
