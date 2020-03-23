import { Component, OnInit, Input } from '@angular/core';
import { NewsserviceService } from '../shared/newsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() tohome:any
  categories=[
    {type:"Home",url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=9e3a2c43de094c8c8aa85c654036e441"},
  {type:"Entertainment",url:"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9e3a2c43de094c8c8aa85c654036e441"},
  {type:"Buisness",url:"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9e3a2c43de094c8c8aa85c654036e441"},
  {type:"Health",url:"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9e3a2c43de094c8c8aa85c654036e441"},
  {type:"Science",url:"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=9e3a2c43de094c8c8aa85c654036e441"},
  {type:"Sports",url:"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9e3a2c43de094c8c8aa85c654036e441"},
  {type:"Technology",url:"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9e3a2c43de094c8c8aa85c654036e441"}
]
  selectedItem: any=this.categories[0].url;


    constructor(private ns:NewsserviceService,
      private router:Router) { }
  
    ngOnInit(): void {

      this.router.navigate(['/news-list'])
      
    }

    onClick(title){
      this.selectedItem = title; 
      console.log(title)
      this.ns.getUrl(title) 
      this.tohome=this.ns.tohome
      this.router.navigate(['/news-list'])
      // this.ns.selectedurl.emit(this.tohome)
    
    }
  
  }
  
