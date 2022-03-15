import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  newsList:any =[
    {title:"Święto Ksiązki",date:"Termin:21.04",time:"Godz:16:00"},
    {title:"Święto Ksiązki",date:"Termin:21.04",time:"Godz:16:00"},
    {title:"Święto Ksiązki",date:"Termin:21.04",time:"Godz:16:00"},
    {title:"Święto Ksiązki",date:"Termin:21.04",time:"Godz:16:00"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  flagNews:boolean=false
  openNews() {
    this.flagNews = true
  }

  closeNews() {
    this.flagNews = false
  }

}
