import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  ""},
  {path: "", component: HomeComponent },
  {path: "news-list", component: NewsListComponent},
  {path: "news-list/:link", component: NewsListComponent},
  {path: "news-detail", component: DetailComponent}  ,
  {path: "news-detail:{id}", component: DetailComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
