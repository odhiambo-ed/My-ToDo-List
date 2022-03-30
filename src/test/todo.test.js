/**
 * @jest-environment jsdom
 */

import deleteTodo from "../modules/deleteTodo.js"
import Todo from "../modules/todo.js";

document.body.innerHTML = `<div class="todo-table">
      <!-- todo title -->
      <div class="todo-title">
        <h3 class="todo-title-name">Today's To Do</h3>
        <i class="bi bi-arrow-clockwise" id="refresh-icon"></i>
      </div>
      <!-- todo input -->
      <div class="todo-input">
        <form id="todo-form">
          <input class="todo-input-box" type="text" id="todo-input" placeholder="Add to your list..." />
        </form>
        <i class="bi bi-arrow-return-left" id="return-icon"></i>
      </div>
      <!-- todo items -->
      <div class="todo-items">
        <table class="table table-striped" id="todo-group">
          <tbody id="tbody"></tbody>
        </table>
      </div>
      <div class="clear-all">
        <p class="clear-title" id="clear-title">Clear all completed</p>
      </div>
    </div>`

    describe('add and remove', () => {
      window.localStorage = Storage.prototype;
      test('Add ToDo', () => {
        const todoList = new Todo();
        todoList.addTask('Test');
        expect(todoList.list).toHaveLength(1);
    
        const storage = JSON.parse(localStorage.getItem('todo-list'));
        expect(storage).not.toBe(null);
        expect(localStorage).toHaveLength(1);
      });
    
      test('remove', () => {
        const removeTask = new Todo();
    
        removeTask.addTask('test');
        removeTask.addTask('test');
        removeTask.deleteTask(1);
        expect(removeTask.list).toHaveLength(2);
        removeTask.refresh();
        expect(removeTask.list).toHaveLength(0);
      });
    });
    