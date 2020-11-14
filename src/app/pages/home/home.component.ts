import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks = [
    { status:'done',user:'gilles',title: 'Machine setup', description:'descrition très longue' ,modified: '12/11/2020' },
    { status:'done',user:'gilles',title: 'Machine setup', description:'descrition très longue' ,modified: '13/11/2020' },
    { status:'done',user:'gilles',title: 'Machine setup', description:'descrition très longue' ,modified: '14/11/2020' },
    { status:'done',user:'gilles',title: 'Machine setup', description:'descrition très longue' ,modified: '15/11/2020' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
