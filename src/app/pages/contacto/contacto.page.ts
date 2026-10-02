import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonInput, 
  IonTextarea, 
  IonButton 
} from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonItem, 
    IonInput, 
    IonTextarea, 
    IonButton
  ]
})
export class ContactoPage {
  correo = '';
  mensaje = '';
  enviado = false;

  async enviar() {
    // Guardamos los datos localmente usando Capacitor Preferences (Paso 16)
    await Preferences.set({
      key: 'ultimoMensaje',
      value: JSON.stringify({
        correo: this.correo,
        mensaje: this.mensaje
      })
    });
    
    this.enviado = true;
    console.log('Mensaje guardado localmente:', { correo: this.correo, mensaje: this.mensaje });
  }
}