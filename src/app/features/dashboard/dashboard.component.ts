import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faCopy } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // icons
  faCopy = faCopy;
  faEdit = faPenToSquare;
  faTrash = faTrash;

  rows = [];

  columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }
  ngOnInit(): void {}
}
