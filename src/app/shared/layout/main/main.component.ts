import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ThemeToggleService } from '@services/theme-toggle.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    CommonModule,
    ButtonModule,
    MenuModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
})
export class MainComponent {
  constructor(public themeToggleService: ThemeToggleService) { }

  toggleTheme(): void {
    this.themeToggleService.toggleTheme();
    console.log('Click');
  }
}
