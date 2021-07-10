import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  arrFarms = [
    'Vegetables',
    'Fresh Box',
    'Fruits',
    'Herbs',
    'Hydroponic Farming',
  ];
  arrFarmsPrev = 0;
  arrFarmsActive = 1;
  arrFarmsNext = 2;

  arrDelights = [
    'Bread and Rolls',
    'Biscuits',
    'Cakes, Cupcake and Muffins',
    'Croissants and Pastries',
    'Crackers, Bread Sticks',
    'Donuts, Cookies and Muffins',
    'Food To Go',
  ];
  arrDelightsPrev = 0;
  arrDelightsActive = 1;
  arrDelightsNext = 2;

  arrButchers = [
    'Beef',
    'Chicken',
    'Lamb',
    'Offal',
    'Turkey',
    'Variety Meat',
    'Veal',
  ];
  arrButchersPrev = 0;
  arrButchersActive = 1;
  arrButchersNext = 2;

  arrSeaFood = ['Fish', 'Food To Go', 'Seafood'];
  arrSeaFoodPrev = 0;
  arrSeaFoodActive = 1;
  arrSeaFoodNext = 2;

  arrGrater = [
    'Cheese',
    'Chilled Desserts',
    'Cold Cuts & Meat Snacks',
    'Cream & Labneh',
    'Dips, Spreads & Pate',
    'Kimchi',
    'Olives & Antipasti',
    'Tofu',
  ];
  arrGraterPrev = 0;
  arrGraterActive = 1;
  arrGraterNext = 2;

  constructor() {}

  ngOnInit(): void {}

  //#region farms
  incrementFarms() {
    if (this.arrFarmsActive == this.arrFarms.length - 1) {
      this.arrFarmsActive = 0;
    } else {
      this.arrFarmsActive++;
    }
  }

  decrementFarms() {
    if (this.arrFarmsActive == 0) {
      this.arrFarmsActive = this.arrFarms.length - 1;
    } else {
      this.arrFarmsActive--;
    }
  }

  get prevIndexFarms() {
    if (this.arrFarmsActive == 0) {
      return this.arrFarms.length - 1;
    } else {
      return this.arrFarmsActive - 1;
    }
  }

  get nextIndexFarms() {
    if (this.arrFarmsActive == this.arrFarms.length - 1) {
      return 0;
    } else {
      return this.arrFarmsActive + 1;
    }
  }
  //#endregion

  //#region Delights
  incrementDelights() {
    if (this.arrDelightsActive == this.arrButchers.length - 1) {
      this.arrDelightsActive = 0;
    } else {
      this.arrDelightsActive++;
    }
  }

  decrementDelights() {
    if (this.arrDelightsActive == 0) {
      this.arrDelightsActive = this.arrButchers.length - 1;
    } else {
      this.arrDelightsActive--;
    }
  }

  get prevIndexDelights() {
    if (this.arrDelightsActive == 0) {
      return this.arrButchers.length - 1;
    } else {
      return this.arrDelightsActive - 1;
    }
  }

  get nextIndexDelights() {
    if (this.arrDelightsActive == this.arrButchers.length - 1) {
      return 0;
    } else {
      return this.arrDelightsActive + 1;
    }
  }
  //#endregion

  //#region Butchers
  incrementButchers() {
    if (this.arrButchersActive == this.arrButchers.length - 1) {
      this.arrButchersActive = 0;
    } else {
      this.arrButchersActive++;
    }
  }

  decrementButchers() {
    if (this.arrButchersActive == 0) {
      this.arrButchersActive = this.arrButchers.length - 1;
    } else {
      this.arrButchersActive--;
    }
  }

  get prevIndexButchers() {
    if (this.arrButchersActive == 0) {
      return this.arrButchers.length - 1;
    } else {
      return this.arrButchersActive - 1;
    }
  }

  get nextIndexButchers() {
    if (this.arrButchersActive == this.arrButchers.length - 1) {
      return 0;
    } else {
      return this.arrButchersActive + 1;
    }
  }
  //#endregion

  //#region SeaFood
  incrementSeaFood() {
    if (this.arrSeaFoodActive == this.arrSeaFood.length - 1) {
      this.arrSeaFoodActive = 0;
    } else {
      this.arrSeaFoodActive++;
    }
  }

  decrementSeaFood() {
    if (this.arrSeaFoodActive == 0) {
      this.arrSeaFoodActive = this.arrSeaFood.length - 1;
    } else {
      this.arrSeaFoodActive--;
    }
  }

  get prevIndexSeaFood() {
    if (this.arrSeaFoodActive == 0) {
      return this.arrSeaFood.length - 1;
    } else {
      return this.arrSeaFoodActive - 1;
    }
  }

  get nextIndexSeaFood() {
    if (this.arrSeaFoodActive == this.arrSeaFood.length - 1) {
      return 0;
    } else {
      return this.arrSeaFoodActive + 1;
    }
  }
  //#endregion

  //#region Grater
  incrementGrater() {
    if (this.arrGraterActive == this.arrGrater.length - 1) {
      this.arrGraterActive = 0;
    } else {
      this.arrGraterActive++;
    }
  }

  decrementGrater() {
    if (this.arrGraterActive == 0) {
      this.arrGraterActive = this.arrGrater.length - 1;
    } else {
      this.arrGraterActive--;
    }
  }

  get prevIndexGrater() {
    if (this.arrGraterActive == 0) {
      return this.arrGrater.length - 1;
    } else {
      return this.arrGraterActive - 1;
    }
  }

  get nextIndexGrater() {
    if (this.arrGraterActive == this.arrGrater.length - 1) {
      return 0;
    } else {
      return this.arrGraterActive + 1;
    }
  }
  //#endregion
}
