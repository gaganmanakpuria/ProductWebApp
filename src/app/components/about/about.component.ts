import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  active:any;
  constructor() { }

  ngOnInit(): void {
    this.active="active";
  }

}
