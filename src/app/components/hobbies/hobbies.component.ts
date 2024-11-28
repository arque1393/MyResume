import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hobbies" class="section">
      <div class="container">
        <h2 class="section-title">Hobbies & Interests</h2>
        <div class="hobbies-grid">
          <div class="hobby-card">
            <i class="material-icons">extension</i>
            <h3>Puzzle Solving</h3>
            <p>Solving Rubik's Cube</p>
          </div>
          
          <div class="hobby-card">
            <i class="material-icons">music_note</i>
            <h3>Music</h3>
            <p>Playing Guitar and Harmonica</p>
          </div>
          
          <div class="hobby-card">
            <i class="material-icons">view_in_ar</i>
            <h3>3D Modeling</h3>
            <p>Practicing 3D modeling in Blender</p>
          </div>
          
          <div class="hobby-card">
            <i class="material-icons">menu_book</i>
            <h3>Reading</h3>
            <p>Reading/Listening to Stories</p>
          </div>
          
          <div class="hobby-card">
            <i class="material-icons">computer</i>
            <h3>Linux</h3>
            <p>Linux Distro Hopping & Open Source Exploration</p>
          </div>
          
          <div class="hobby-card">
            <i class="material-icons">science</i>
            <h3>Science</h3>
            <p>Exploring Mathematics, Modern Physics, QFT and String Theory</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hobbies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      padding: 1rem 0;
    }

    .hobby-card {
      background: var(--card-bg);
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px var(--shadow-color);
      }

      i {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      h3 {
        color: var(--text-color);
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }

      p {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }

    @media (max-width: 768px) {
      .hobbies-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .hobby-card {
        padding: 1.25rem;
      }
    }
  `]
})
export class HobbiesComponent {}
