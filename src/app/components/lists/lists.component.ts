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
    this.listService.getLists().subscribe(lists =>{
      this.lists = lists;
      this.lists[0].selected = true;
    });
  }
  getLists():void{
    this.listService.getLists().subscribe(lists =>{
      this.lists = lists;
    });
  }
  onLoadTasks(list){
    this.updateTasks.emit(list);
    list.selected=true;
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
    let index = this.lists.length;
    this.listService.addList(list).subscribe( ()=>{
      this.listService.getLists().subscribe(lists =>{
        this.lists = lists;
        this.lists[index].selected = true;
        this.onLoadTasks(this.lists[index]);
      });
      
    })
    
  }

  editList(list:List){
    let index = this.lists.indexOf(list);
    this.listService.updateList(list).subscribe( ()=>{
      this.listService.getLists().subscribe(lists =>{
        this.lists = lists;
        this.lists[index].selected = true;
      });
    })
  }
  updateSelection(list:List){
    list.selected=true;
    
    this.lists.forEach(listitem => {
      if(listitem.id !=list.id){
        listitem.selected = false;
      }
    });
  }
}