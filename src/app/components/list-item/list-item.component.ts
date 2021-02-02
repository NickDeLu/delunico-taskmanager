import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { List } from 'src/app/models/List';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  
  @Input() list: List;
  @Output() deleteList: EventEmitter<List> = new EventEmitter();
  @Output() editList: EventEmitter<List> = new EventEmitter();
  @Output() updateTasks: EventEmitter<List> = new EventEmitter();
  @Output() updateSelection: EventEmitter<List> = new EventEmitter();
  constructor(private listService:ListService) { }
  
  isHidden:boolean = true;
  isSelected:boolean = false;

  ngOnInit(): void {
  }
  select(list){
    let classes = {}
    if(list.selected){
      classes = {
        'select':true
      }
    }else{
      classes = {
        'select':false
      }
    }
      return classes;
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
  onToggleHidden(){
    this.isHidden = !this.isHidden;
  }

  // Updating tasks
  onLoadTasks(list:List){
    console.log("lists are loaded")
    this.updateTasks.emit(list);
    this.updateSelection.emit(list);
  }

  // On delete
  onDelete(list:List){
    this.deleteList.emit(list);
  }
  onEdit(list:List){
    this.list.title=list.title;
    this.editList.emit(this.list);
  }
}
