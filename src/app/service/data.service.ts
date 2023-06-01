import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = {
    "summary": {
      "campaignName": "Aqua Pilot Campaign",
      "channel": "instagram",
      "postType": "post",
      "startDate": "2023-05-28T17:00:00Z",
      "endDate": "2023-06-04T17:00:00Z",
      "totalSpend": 0,
      "reach": 1292,
      "impressions": 1688,
      "followers": 2180,
      "likes": 0,
      "comments": 0,
      "shares": 0,
      "saves": 0,
      "clicks": 0,
      "ctr": 0,
      "totalEngagements": 439,
      "engagementRate": 33.978328173374614,
      "cpr": 1,
      "cpv": 1,
      "cpi": 1,
      "cpe": 1,
      "reachPercentage": 0,
      "chartEngagementByType": {
        "likes": 76,
        "comments": 12,
        "saves": 4
      },
      "chartTargetVsActualImpression": {
        "targetER": 0,
        "realER": 33.978328173374614
      }
    },
    "individualList": [
      {
        "proposalId": "0a84075e-71b8-44cc-8a2d-a156cad46d3s",
        "creatorId": "9ac38b5f-22a1-4f22-b01d-a22da96bf31d",
        "creatorName": "Dara Loemongga",
        "channel": "instagram",
        "postType": "post",
        "followersCount": 2180,
        "engagementRate": 0,
        "cpr": 0,
        "cpe": 0,
        "price": 0,
        "reach": 0,
        "impressions": 0,
        "views": 0,
        "likes": 0,
        "comment": 0,
        "shares": 0,
        "clicks": 0,
        "platformContentId": null
      },
      {
        "proposalId": "0a84075e-71b8-44cc-8a2d-a156cad46d3a",
        "creatorId": "9ac38b5f-22a1-4f22-b01d-a22da96bf31q",
        "creatorName": "Jesse Bouman",
        "channel": "instagram",
        "postType": "post",
        "followersCount": 88127,
        "engagementRate": 0,
        "cpr": 0,
        "cpe": 0,
        "price": 0,
        "reach": 0,
        "impressions": 0,
        "views": 0,
        "likes": 0,
        "comment": 0,
        "shares": 0,
        "clicks": 0,
        "platformContentId": null
      },
      {
        "proposalId": "0a84075e-71b8-44cc-8a2d-a156cad46d3s",
        "creatorId": "9ac38b5f-22a1-4f22-b01d-a22da96bf31f",
        "creatorName": "Dara Loemongga",
        "channel": "instagram",
        "postType": "post",
        "followersCount": 2180,
        "engagementRate": 0,
        "cpr": 0,
        "cpe": 0,
        "price": 0,
        "reach": 1292,
        "impressions": 1688,
        "views": 0,
        "likes": 0,
        "comment": 0,
        "shares": 0,
        "clicks": 0,
        "platformContentId": null
      }
    ],
    "pageable": {
      "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
      },
      "offset": 0,
      "pageNumber": 0,
      "pageSize": 10,
      "paged": true,
      "unpaged": false
    },
    "last": true,
    "totalPages": 1,
    "totalElements": 3,
    "size": 10,
    "number": 0,
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "first": true,
    "numberOfElements": 3,
    "empty": false
  }
  constructor() { }

  getDataSummary() {
    const type1 = [
      { name: 'Reach', field: 'reach' },
      { name: 'Impressions', field: 'impressions' },
      { name: 'Followers', field: 'followers' },
      { name: 'Click Rate (CTR)', field: 'ctr' },
      { name: 'Total Clicks', field: 'clicks' },
      { name: 'Percentage of Reach', field: 'reachPercentage' },
      { name: 'Engagement Rate', field: 'engagementRate' },
      { name: 'Total Engagements', field: 'totalEngagements' }
    ]
    const type2 = [
      { name: 'Cost per Reach', field: "cpr" },
      { name: 'Cost per View', field: "cpv" },
      { name: 'Cost per Impression', field: "cpi" },
      { name: 'Cost per Engagement', field: "cpe" }
    ]
    const datas: any = [];

    type1.forEach((dt, key) => {
      datas.push({
        name: dt.name,
        type: 1,
        value: this.data.summary[dt.field] || 0
      });
    });

    type2.forEach((dt, key) => {
      datas.push({
        name: dt.name,
        type: 2,
        value: this.data[dt.field] || 0
      });
    });
    return datas
  }

  getDataTable() {
    return this.data.individualList
  }
  searchTable(elem: string) {
    return this.data.individualList.filter((el: any) => el.creatorName.toLowerCase().includes(elem.toLowerCase()))
  }
}
