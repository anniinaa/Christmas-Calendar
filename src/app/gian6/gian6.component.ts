import { Component, OnInit } from '@angular/core';
declare const cal: any;
@Component({
  selector: 'app-gian6',
  templateUrl: './gian6.component.html',
  styleUrls: ['./gian6.component.css']
})
export class Gian6Component implements OnInit {

  constructor() { }
  ngAfterViewInit4(): void {
    cal();
  }
  ngOnInit(): void {
  }

}
