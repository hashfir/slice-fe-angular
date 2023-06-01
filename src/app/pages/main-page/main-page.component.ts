import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  summary: any = [];
  constructor(private getdata: DataService) { }

  ngOnInit() {
    this.summary = this.getdata.getDataSummary();
    console.log(this.summary, "summarysummary");
    
  }
}
