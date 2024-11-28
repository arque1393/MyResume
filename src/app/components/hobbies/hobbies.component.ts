import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hobbies" class="section hobbies-section">
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
    .hobbies-section {
      padding: 4rem 0;
      min-height: 100vh;
      background-color: var(--background-color);
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }
    }

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
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, var(--primary-color) 0%, transparent 400%);
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 1rem;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px var(--shadow-color);
        
        &::before {
          opacity: 0.05;
        }

        i {
          transform: scale(1.1);
          color: var(--primary-color);
        }
      }

      i {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        transition: all 0.3s ease;
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
      .hobbies-section {
        padding: 3rem 0;
      }
      
      .hobbies-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .hobby-card {
        padding: 1.25rem;
        
        i {
          font-size: 2rem;
        }
        
        h3 {
          font-size: 1.1rem;
        }
      }
    }
  `]
})
export class HobbiesComponent {}
