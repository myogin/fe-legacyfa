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

  ColumnMode = ColumnMode;
  SortType = SortType;

  columns: any[] = [];
  constructor() {
    this.fetch((data: any) => {
      this.rows = data.pfr_list;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://167.71.199.94:8200/api/pfr-list`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

  ngOnInit(): void {
    this.columns = [
      { prop: 'uuid', name: 'Id' },
      { prop: 'client.name', name: 'Client Name' },
      { prop: 'type', name: 'Type' },
      { prop: 'pfr_status', name: 'Status' },
      { prop: 'action', name: 'Actions' },
    ];
  }
}
