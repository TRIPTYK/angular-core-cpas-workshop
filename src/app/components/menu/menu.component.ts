import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  isMenuVisible: boolean = false;
  toggleProfileMenu() {
    console.log('uuu');
    this.isMenuVisible = !this.isMenuVisible;
  }
  ngOnInit(): void {}
}
