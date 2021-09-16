import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit {
  @Input() history: any;

  constructor() { }

  ngOnInit(): void {
  }

}
