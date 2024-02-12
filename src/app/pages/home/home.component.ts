import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, GalleriaModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  images: any;
  value: any;


  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  ngOnInit() {
    this.images = [
      {
        itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      }
    ]


    console.log(this.images);
  }

  onValueChange(event: any) {
    this.value = event;
  }
}
