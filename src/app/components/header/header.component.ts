import { LocalizationService } from './../../internationalization/localization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  language: string = 'en';
  constructor(private localizationService: LocalizationService) {}

  setLanguage(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
  }

  ngOnInit(): void {}

  get lang() {
    let lang = localStorage.getItem('language') || 'en';
    return lang;
  }

  scrollToElement(id: any): void {
    document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
