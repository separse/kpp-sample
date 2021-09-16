import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = [
    {
      id: 0,
      name: 'شناسه واریز',
      isActive: false,
    },
    {
      id: 1,
      name: 'چک',
      isActive: false,
    },
    {
      id: 2,
      name: 'حواله / پرداخت',
      isActive: true,
    },
    {
      id: 3,
      name: 'بن‌کارت',
      isActive: false,
    },
    {
      id: 4,
      name: 'گزارشات',
      isActive: false,
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
