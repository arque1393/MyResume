import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="nav-container">
        <div class="logo">
          <span class="logo-text">AR</span>
          <span class="logo-full">Aritra Ranjan</span>
        </div>
        
        <div class="nav-links" [class.active]="isMenuOpen">
          <a href="#about" (click)="closeMenu()">About</a>
          <a href="#skills" (click)="closeMenu()">Skills</a>
          <a href="#experience" (click)="closeMenu()">Experience</a>
          <a href="#projects" (click)="closeMenu()">Projects</a>
          <a href="#contact" (click)="closeMenu()">Contact</a>
          
          <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'">
            <div class="toggle-track">
              <div class="toggle-thumb" [class.dark]="isDarkTheme">
                <i class="material-icons">{{ isDarkTheme ? 'dark_mode' : 'light_mode' }}</i>
              </div>
            </div>
          </button>
        </div>

        <button class="mobile-menu-btn" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkTheme = false;
  isScrolled = false;
  isMenuOpen = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(
      isDark => this.isDarkTheme = isDark
    );

    // Add scroll listener
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}
