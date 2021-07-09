import { LocalizationService } from './../../internationalization/localization.service';
import { Component, OnInit } from '@angular/core';

import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  title = 'Primemart';
  mobileMenuVisible = false;

  constructor(private localizationService: LocalizationService) {}

  get name(): string {
    return this.localizationService.translate('Title');
  }

  get lang() {
    let lang = localStorage.getItem('language') || 'en';
    return lang;
  }

  setLanguage(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
  }

  openNav() {
    document.getElementById('mySidepanel')!.style.width = '327px';
  }

  closeNav() {
    document.getElementById('mySidepanel')!.style.width = '0';
  }

  scrollToElement(id: any): void {
    this.closeNav();
    document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
