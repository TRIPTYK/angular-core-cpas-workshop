import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks = [
    { title: 'Machine setup', last_modified: '12/11/2020' },
    { title: 'Backup setup', last_modified: '12/11/2020' },
    { title: 'Project follow setup', last_modified: '15/11/2020' },
    { title: 'Project tasks dev ', last_modified: '15/11/2020' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
