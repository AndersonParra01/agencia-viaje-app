import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.sass'
})
export class ServicesComponent implements OnInit {
  services: any;
  ngOnInit(): void {
    this.services = [
      {
        title: 'Tour en la ciudad',
        description: 'Explora los lugares más emblemáticos de nuestra ciudad con nuestros guías expertos.',
        price: '$50 por persona',
        image: 'assets/images/services/tour.jpeg'
      },
      {
        title: 'Excursión a la naturaleza',
        description: 'Sumérgete en la belleza natural de nuestra región con nuestras excursiones guiadas.',
        price: '$80 por persona',
        image: 'assets/images/services/excursion.jpeg'
      },
      {
        title: 'Aventura en la montaña',
        description: 'Descubre la emoción de escalar montañas y disfrutar de vistas impresionantes con nuestros expertos.',
        price: '$100 por persona',
        image: 'assets/images/services/mountain.jpeg'
      }
    ];
  }
}
