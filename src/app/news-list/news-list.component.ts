import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NewsserviceService } from '../shared/newsservice.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
news:any

    constructor(private ns:NewsserviceService,private router:Router) { }

      ngOnInit() {
      /*   this.ns.getData().subscribe(data=>
          {
            this.news=data.channel;
            console.log(this.news)
            console.log(data)
          }) */
        this.news = this.ns.getNewsList();
        this.ns.selectedurl.subscribe(data => {
          this.news=data;
          console.log(this.news)
      })
  
    }

    getDetailNews(title){
     this.ns.getDetailNews(title)
     this.router.navigate(["/news-detail"])

    }

 
  }
  