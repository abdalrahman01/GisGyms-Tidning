import { Component, OnInit } from '@angular/core';
import allstudents from "../../assets/students/allstudents.json";
import allstudents4 from "../../assets/students/allstudents4.json";
@Component({
  selector: 'app-elever',
  templateUrl: './elever.component.html',
  styleUrls: ['./elever.component.scss']
})
export class EleverComponent implements OnInit {

  constructor() { }
  elever= allstudents4;
  ngOnInit(): void {
  }

}
