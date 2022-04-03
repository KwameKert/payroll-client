import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
})
export class BaseTableComponent implements OnInit {
  @Input() dataSource!: any;
  @Input() displayedColumns!: Array<string>;
  constructor() {}

  ngOnInit(): void {}
}
