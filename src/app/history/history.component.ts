import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  histories = [
    {
      name: 'علی امین دزفولی',
      title: 'عنوان جدول شماره سه از جدول چهار',
      price: 20000000,
      date: '12:30 - 1399/12/11',
      details: [
        { name: 'حواله 10' },
        { name: 'بسته 12' },
        { name: '103334529810245 IR' },
      ]
    },
    {
      name: 'علی امین دزفولی',
      title: 'عنوان جدول شماره سه از جدول چهار',
      price: 20000000,
      date: '12:30 - 1399/12/11',
      details: [
        { name: 'حواله 10' },
        { name: 'بسته 12' },
        { name: '103334529810245 IR' },
      ]
    },
    {
      name: 'علی امین دزفولی',
      title: 'عنوان جدول شماره سه از جدول چهار',
      price: 20000000,
      date: '12:30 - 1399/12/11',
      details: [
        { name: 'حواله 10' },
        { name: 'بسته 12' },
        { name: '103334529810245 IR' },
      ]
    },
    {
      name: 'علی امین دزفولی',
      title: 'عنوان جدول شماره سه از جدول چهار',
      price: 20000000,
      date: '12:30 - 1399/12/11',
      details: [
        { name: 'حواله 10' },
        { name: 'بسته 12' },
        { name: '103334529810245 IR' },
      ]
    },
    {
      name: 'علی امین دزفولی',
      title: 'عنوان جدول شماره سه از جدول چهار',
      price: 20000000,
      date: '12:30 - 1399/12/11',
      details: [
        { name: 'حواله 10' },
        { name: 'بسته 12' },
        { name: '103334529810245 IR' },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
