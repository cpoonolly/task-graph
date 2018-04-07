import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAppMenuOpen: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  toggleAppMenu() {
    this.isAppMenuOpen = !this.isAppMenuOpen;
    console.log('Menu toggled');
  }
}
