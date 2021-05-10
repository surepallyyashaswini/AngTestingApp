import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
products:Product[]=[
   {
  productTitle:"MI NECKBAND",
  description:"Apart from active noise cancellation, there is also environmental noise cancellation for better performance on voice calls, and an IPX5 water resistance rating on the Mi Neckband.PRICE:2100/-",
  productImage:"assets/MI.jpg"
   },
  {
  productTitle:"BOAT NECKBAND",
  description:"With our ASAP Fast Charge technology, the neckband offers a playtime of up to 10 hours in just 20 minutes of charge.Provides option of choosing between two EQ modes, bass & balanced.PRICE:1250/-",
  productImage:"assets/BOAT.png"
  },
  
  {
  productTitle:"MIVI NECKBAND",
  description:"Super Charging 10mins = 10hrs Playtime - Mivi Collar 2B.Remote to control your music and calls: Play, pause, skip track, play next, mute all with  the touch of one button.PRICE:1000/-",
  productImage:"assets/MVI.jpg"
  },
  
  {
  productTitle:"SAMSUNG NECKBAND",
  description:"With the Level U Collar Bluetooth Headset, you can adjust the Volume, control the Music Status, connect the Phone, and easily start the S-Voice Control without taking your phone out.PRICE:1200/-",
  productImage:"assets/SAMSUNG.jpg"
},
  {
    productTitle:"OPPO NECKBAND",
    description:"9.2 mm full range dynamic speaker provides clear sound & powerful bass.10-minute charge gives 180 minutes of music playback. A single charge provides 12 hours of music playback.PRICE:1500/-",
    productImage:"assets/OPPO.jpg"
    },
    {
    productTitle:"VIVO NECKBAND",
    description:"129mAh battery offers up to 18 hours music playback (50% volume), 12 hours of talk time, 10 minutes charge for 5hours of audio with USB Type-C fast charging.Magnetic control.PRICE:1300/-",
    productImage:"assets/VIVO.jpg"
    },
    
{
    productTitle:"ONEPLUS NECKKBAND",
    description:"With convenient features like Quick Switch, Quick Pair and Magnetic Control, listening to your music on your Bullets Wireless Z Bass Edition is a whole new acoustic experience； Low latency Mode.PRICE:2500/-",
    productImage:"assets/ONEPLUS.png"
    },
    
    {
    productTitle:"JBL NECKBAND",
    description:"Enjoy long-lasting fun and fast recharging thanks to best in class 10 hours of play time (max) and 2 hour quick charge.Bluetooth technology.Magnetic buds.PRICE:1100/-",
    productImage:"assets/JBL.png"
    }
];
  
}
