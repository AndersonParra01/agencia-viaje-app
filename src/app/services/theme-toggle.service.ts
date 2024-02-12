import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  constructor() { }
  private readonly darkKey = 'dark';

  loading = true;
  isDark = this.getTheme();

  private getTheme(): boolean {
    const storedTheme = localStorage.getItem(this.darkKey);
    return storedTheme ? JSON.parse(storedTheme) : !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private setTheme(value: boolean): void {
    localStorage.setItem(this.darkKey, JSON.stringify(value));
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme(this.isDark);
  }
}
