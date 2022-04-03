import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.scss'],
})
export class MainWidgetComponent implements OnInit {
  @Input() header!: string;
  @Input() main!: string;
  @Input() footer!: string;
  constructor() {}

  ngOnInit(): void {}
}
