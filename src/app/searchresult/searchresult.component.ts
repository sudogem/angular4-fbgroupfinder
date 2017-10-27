import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})

export class SearchresultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ["groupId", "groupTitle", "groupURL", "isExist"];
  dataSource = new ExampleDataSource();
}

export interface Group {
  groupId: string,
  groupTitle: string,
  groupURL: string,
  isExist: boolean
}

const data: Group[] = [
  {
    groupId: "177170715745078",
    groupTitle: "Investing in the Philippines Stock Market -  Tips and Tricks",
    groupURL: "https://www.facebook.com/groups/pinoyinvesting/",
    isExist: false
  }
]

export class ExampleDataSource extends DataSource<any> {
  connect(): Observable<Group[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
