import { Component, HostListener } from '@angular/core';
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
          <a href="#about" (click)="scrollToSection($event, 'about')">About</a>
          <a href="#skills" (click)="scrollToSection($event, 'skills')">Skills</a>
          <a href="#education" (click)="scrollToSection($event, 'education')">Education</a>
          <a href="#experience" (click)="scrollToSection($event, 'experience')">Experience</a>
          <a href="#projects" (click)="scrollToSection($event, 'projects')">Projects</a>
          <a href="#hobbies" (click)="scrollToSection($event, 'hobbies')">Hobbies</a>
          
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
  private touchStartX = 0;
  private touchEndX = 0;
  private isMobileView = window.innerWidth <= 768;
  private readonly headerHeight = 60; // Fixed header height
  private readonly mobileOffset = 20; // Additional offset for mobile

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(
      isDark => this.isDarkTheme = isDark
    );

    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobileView = window.innerWidth <= 768;
  }

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (this.isMobileView) {
      this.touchStartX = event.touches[0].clientX;
    }
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (this.isMobileView) {
      this.touchEndX = event.changedTouches[0].clientX;
      this.handleSwipe();
    }
  }

  private handleSwipe() {
    const swipeDistance = this.touchStartX - this.touchEndX;
    const threshold = 50;

    if (!this.isMenuOpen) {
      if (swipeDistance > threshold) {
        this.openMenu();
      }
    } else {
      if (swipeDistance < -threshold) {
        this.closeMenu();
      }
    }
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = this.isMobileView ? this.headerHeight + this.mobileOffset : this.headerHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    this.closeMenu();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-open');
  }

  openMenu() {
    this.isMenuOpen = true;
    document.body.classList.add('menu-open');
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('menu-open');
  }
}
