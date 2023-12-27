import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  electonicsProduct = [
    {
      name: 'iPhone 14 Plus',
      brand: 'Apple',
      price: 140000,
      img: 'assets/image/iphone-14-plus.png',
    },
    {
      name: 'iPhone 15',
      brand: 'Apple',
      price: 170000,
      img: 'assets/image/iphone-15.png',
    },
    {
      name: 'Earphone',
      brand: 'Sony',
      price: 1700,
      img: 'assets/image/earphone.png',
    },
    {
      name: 'Head phone',
      brand: 'Boat',
      price: 1900,
      img: 'assets/image/headphone.png',
    },
  ];

  clothList = [
    {
      name: 'iPhone 14 Plus',
      brand: 'Apple',
      price: 140000,
      img: 'assets/image/iphone-14-plus.png',
    },
    {
      name: 'iPhone 15',
      brand: 'Apple',
      price: 170000,
      img: 'assets/image/iphone-15.png',
    },
    {
      name: 'Earphone',
      brand: 'Sony',
      price: 1700,
      img: 'assets/image/earphone.png',
    },
    {
      name: 'Head phone',
      brand: 'Boat',
      price: 1900,
      img: 'assets/image/headphone.png',
    },
  ];
}