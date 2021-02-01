import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  @Output() editList: EventEmitter<any> = new EventEmitter();
  title:string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const list = {
     title:this.title
    }
     this.editList.emit(list);
   }
}
