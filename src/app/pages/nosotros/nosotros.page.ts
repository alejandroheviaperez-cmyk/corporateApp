import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent 
} from '@ionic/angular';
import { GeolocationService } from '../../services/geolocation'; // O geolocation.service según tu archivo

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent
  ]
})
export class NosotrosPage implements OnInit {

  distancia: number = 0;

  // Coordenadas de las oficinas (Apartado 12)
  private oficinaLat = 40.4452;
  private oficinaLon = -3.6115;

  constructor(private geolocationService: GeolocationService) {}

  async ngOnInit() {
    try {
      const coords = await this.geolocationService.getCurrentPosition();
      // Cálculo de distancia mediante la fórmula Haversine
      this.distancia = this.calcularDistancia(
        coords.latitude, 
        coords.longitude, 
        this.oficinaLat, 
        this.oficinaLon
      );
      // Redondear a 2 decimales
      this.distancia = Math.round(this.distancia * 100) / 100;
    } catch (error) {
      console.error('Error al obtener la geolocalización', error);
    }
  }

  // Fórmula Haversine (Apartado 13)
  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radio de la tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}