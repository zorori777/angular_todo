import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() createTodo = new EventEmitter();

  id=2;
  item="";

  constructor() { }

  ngOnInit() {
  }

  onCreateTodo() {
    if(this.item !== "") this.createTodo.next({
      id: this.id,
      item: this.item
    });
    this.item = "";
    this.id++;
  }
}
