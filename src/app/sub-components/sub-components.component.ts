import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-components',
  template: `<div class="welcome">Welcome to Angular </div>`,
  styleUrls: ['./sub-components.component.css']
})
export class SubComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}