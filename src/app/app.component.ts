import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    HobbiesComponent
  ],
  template: `
    <div [class.dark-theme]="isDarkTheme">
      <app-header></app-header>
      <main class="main-content">
        <app-about></app-about>
        <app-skills></app-skills>
        <app-education></app-education>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-hobbies></app-hobbies>
      </main>
    </div>
  `,
  styles: [`
    .main-content {
      padding-top: 70px; /* Height of fixed header */
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
  `]
})
export class AppComponent {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(
      isDark => this.isDarkTheme = isDark
    );
  }
}
