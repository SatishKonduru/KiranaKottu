import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
 constructor(){}
  

  public products = [
    {
      name: 'Bamboo Watch',
      price: 65,
      image: 'bamboo-watch.jpg'
    },
    {
      name: 'Black Watch',
      price: 65,
      image: 'black-watch.jpg'
    },
    {
      name: 'Blue T-Shirt',
      price: 65,
      image: 'blue-t-shirt.jpg'
    },
    {
      name: 'Bracelet',
      price: 65,
      image: 'bracelet.jpg'
    },
    {
      name: 'Bamboo Watch',
      price: 65,
      image: 'bamboo-watch.jpg'
    },
    {
      name: 'Blue Band',
      price: 65,
      image: 'blue-band.jpg'
    },
    {
      name: 'Blue T-Shirt',
      price: 65,
      image: 'blue-t-shirt.jpg'
    },
    {
      name: 'Bracelet',
      price: 65,
      image: 'bracelet.jpg'
    },
    {
      name: 'Bamboo Watch',
      price: 65,
      image: 'bamboo-watch.jpg'
    },
    {
      name: 'Black Watch',
      price: 65,
      image: 'black-watch.jpg'
    },
    {
      name: 'Blue T-Shirt',
      price: 65,
      image: 'blue-t-shirt.jpg'
    },
    {
      name: 'Bracelet',
      price: 65,
      image: 'bracelet.jpg'
    },
    {
      name: 'Bamboo Watch',
      price: 65,
      image: 'bamboo-watch.jpg'
    },
    {
      name: 'Blue Band',
      price: 65,
      image: 'blue-band.jpg'
    }
  
  ]
  responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1043px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '720px',
        numVisible: 1,
        numScroll: 1
    }
];
  
 

}
