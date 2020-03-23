import { Injectable, EventEmitter, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService implements OnInit{
 
detail_t:any
  selectedurl=new EventEmitter();

  @Input() tohome:any
  url:string='https://newsapi.org/v2/top-headlines?country=in&apiKey=9e3a2c43de094c8c8aa85c654036e441'
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    
  }
  
  getUrl(url){
    this.url=url
  
    this.getNewsList();
    
  }

  getNewsList() {

    console.log(this.url)
    this.http.get<any[]>(this.url).subscribe(data => {
      this.tohome = data
     
      this.selectedurl.emit(this.tohome.articles)
    })

  }

  getDetailNews(title){
    this.detail_t=title
  }
  

  /* getData(): Observable<any> {
    this.url='https://cors-anywhere.herokuapp.com/'+this.url
  return this.http.get<any[]>(this.url);
} */
 
}

