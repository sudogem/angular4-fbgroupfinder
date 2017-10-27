import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { SearchresultComponent } from '../searchresult/searchresult.component';

@NgModule({
  declarations: [SearchresultComponent]
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
