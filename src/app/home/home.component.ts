import { Component, OnInit } from '@angular/core';
import news from "../../assets/news/news.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


  News: any = news;

  ngOnInit(): void {
  }


  

}
