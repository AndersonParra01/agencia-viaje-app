import { Component } from '@angular/core';
import { ThemeToggleService } from '@services/theme-toggle.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  constructor(public themeToggleService: ThemeToggleService) { }
  darkMode: boolean = false;

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
}
