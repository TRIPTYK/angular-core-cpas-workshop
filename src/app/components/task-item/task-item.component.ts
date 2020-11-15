import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from 'src/app/shared/interfaces/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    status: 'done',
    user: 'unknown',
    title: 'test task',
    description: 'description',
    modified: '00/00/00',
  };
  @Output() selectTaskEvent: EventEmitter<Task> = new EventEmitter();

  clickHandler(): void {
    this.selectTaskEvent.emit(this.task);
  }
  constructor() {}

  ngOnInit(): void {}
}
