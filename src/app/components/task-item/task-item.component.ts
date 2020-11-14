import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/app/shared/interfaces/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task  =  {
    status: 'done',
    user: 'unknown',
    title: 'test task',
    description: 'description',
    modified: '00/00/00'
  };
  constructor() {}

  ngOnInit(): void {}
}
