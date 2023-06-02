import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  summary: any = [];
  chart: any = [];
  rowTable: any = [];
  searchText: any = '';
  columnTable: any = [
    {
      name: 'Creator',
      field: "creatorName"
    },
    {
      name: 'Post Type',
      field: 'postType'
    },
    {
      name: 'Impressions',
      field: 'impressions'
    },
    {
      name: 'Views',
      field: 'views'
    },
    {
      name: 'Clicks',
      field: 'clicks'
    }

  ]
  options: string[] = ['Reels', 'Post'];
  selectedOption: string = 'Post';
  constructor(private getdata: DataService) {
    this.rowTable = this.getdata.getDataTable()
  }

  ngOnInit() {
    this.summary = this.getdata.getDataSummary();
    this.chart = this.getdata.getDataChart();  }

  search() {
    this.rowTable = this.getdata.searchTable(this.searchText)
  }
  select(event: any) {
    this.rowTable = this.getdata.selectTable(event.target.value)
  }
}
