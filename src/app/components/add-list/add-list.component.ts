import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  @Output() addList: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const list = {
      title:this.title,
      completed:false
    };
    this.addList.emit(list);
    this.title="";
  }
}
