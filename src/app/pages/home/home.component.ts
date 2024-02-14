import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, GalleriaModule, CarouselModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  images: any;
  value: any;

  ngOnInit() {
    this.images = [
      {
        id: '1',
        name: 'Centro historico',
        image: 'assets/images/home/image1.jpg',
      },
      {
        id: '2',
        name: 'Bamboo Watch',
        image: 'assets/images/home/image2.jpg',
      },
    ];

    console.log(this.images);
  }

  onValueChange(event: any) {
    this.value = event;
  }
}
