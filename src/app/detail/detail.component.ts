import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsserviceService } from '../shared/newsservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
detail_title:any

new_detail:any
  constructor(private ns:NewsserviceService) { }

  ngOnInit(): void {

  this.detail_title=this.ns.detail_t

this.ns.getNewsList();
  this.ns.selectedurl.subscribe(data => {
   // this.detail_news=[...data];
       this.new_detail =data.find(card => card.title === this.detail_title);
    console.log(this.new_detail)
 
})

}
}
