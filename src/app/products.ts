export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images:string[]
}

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ['phoneXL.jpg']
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ['phonemini.jpg']
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone standard',
    images: ['standard.jpg']
  },
  {
    id: 4,
    name: 'Phone Motorola',
    price: 566,
    description: 'Motorola E6 Play',
    images: ['motorola.jpg']
  },
  {
    id: 5,
    name: 'Phone IPhone',
    price: 3000,
    description: 'Iphone Premiun',
    images: ['iphone11.jpg']
  }  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/