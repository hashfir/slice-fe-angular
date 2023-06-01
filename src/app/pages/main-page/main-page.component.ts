import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  summary: any = [];
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
    console.log(this.summary, "summarysummary");

  }

  search() {
    this.rowTable = this.getdata.searchTable(this.searchText)
    // Perform the search operation using the this.searchText value
    // You can access input values, call API, or manipulate data as needed
    // Example: console.log('Search button clicked', this.searchText);
  }
  select(event: any) {
    console.log(this.selectedOption, event, "this.selectedOption");

    this.rowTable = this.getdata.selectTable(event.target.value)
  }
}
