import { LocalizationService } from './internationalization/localization.service';
import { Component } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
