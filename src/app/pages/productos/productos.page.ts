import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonBackButton
} from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonBackButton
  ]
})
export class ProductosPage implements OnInit {
  // Declaramos los 3 productos directamente aquí para asegurar que se muestran
  products = [
    { id: 1, nombre: 'Portátil Dell', unidades: 12, precio: 1200 },
    { id: 2, nombre: 'Monitor LG', unidades: 8, precio: 299 },
    { id: 3, nombre: 'Teclado Logitech', unidades: 25, precio: 59.99 }
  ];

  constructor() {}

  ngOnInit() {}
}