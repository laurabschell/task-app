import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskList: Task[] = [];
  taskName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    const task: Task = { name: this.taskName, status: false };

    this.taskList.push(task);

    this.taskName = '';
  }

  removeTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  updateTask(task: Task, index: number): void {
    this.taskList[index].status = !task.status
  }

}
