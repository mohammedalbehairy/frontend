import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  Images = [
    {
      src: 'https://loremflickr.com/g/600/400/paris',
      alt: 'Image 1',
    },
    {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 2',
    },
    {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 3',
    },
    {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 4',
    },
    {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 5',
    },
    {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
