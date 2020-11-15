import Task from 'src/app/shared/interfaces/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedTask: Task | null = null;
  tasks = [
    {
      status: 'done',
      user: 'gilles',
      title: 'Machine setup',
      description: 'descrition très longue',
      modified: '12/11/2020',
    },
    {
      status: 'done',
      user: 'gilles',
      title: 'github setup',
      description: 'descrition de github très longue',
      modified: '13/11/2020',
    },
    {
      status: 'done',
      user: 'stephane',
      title: 'UX brainstormins',
      description: 'descrition ce de brainstorming avec soi meme très longue',
      modified: '14/11/2020',
    },
    {
      status: 'done',
      user: 'gilles',
      title: 'Machine setup',
      description: 'descrition très longue',
      modified: '15/11/2020',
    },
  ];
  selectTask(task: Task): void {
    this.selectedTask = task;
  }
  constructor() {}

  ngOnInit(): void {}
}
