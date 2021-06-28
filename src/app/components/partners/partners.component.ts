import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get dir() {
    let dir = localStorage.getItem('language') == 'ar' ? 'rtl' : 'ltr';
    return dir;
  }
}
