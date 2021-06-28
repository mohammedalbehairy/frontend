import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get lang() {
    let lang = localStorage.getItem('language') || 'en';
    return lang;
  }

  styleObject(): Object {
    if (this.lang == 'ar') {
      return {
        left: '64px',
        right: 0,
      };
    } else
      return {
        left: 0,
        right: '64px',
      };
  }
}
