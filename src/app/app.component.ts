import { Component } from '@angular/core';

export class Todo {
  id: number;
  item: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  todos: Todo[] = [{
    id: 1,
    item: "カレーを作る"
  }]

  onCreateTodo(todo) {
    this.todos.push({
      id: todo.id,
      item: todo.item
    });
  }
  
  onDeleteTodo(todo) {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)

  }

}
