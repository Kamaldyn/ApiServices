import { Component, OnInit } from '@angular/core';
// call apiservices
import { ApiservicesService } from '../apiservices.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiservicesService) { }

  categoryList:any = ['all','hosting','ecommerce','finance','course','product','travel'];
  showAllData:any=[];

  ngOnInit(): void {

    this.homeData();
  }
  homeData()
  {
    this.service.homeapi().subscribe((result)=>{
      console.log(result, 'result#');
      if (result.length > 0){
        this.showAllData = result;
      }
    });
  }

}