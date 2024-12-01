import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="about-content">
        <div class="profile-info">
          <h1>Aritra Ranjan Chowdhury</h1>
          <div class="contact-info">
            <p><i class="material-icons">phone</i> +91 6291584559</p>
            <p><i class="material-icons">email</i> aritra1393&#64;gmail.com</p>
            <p><i class="material-icons">location_on</i> 19, Purbachal Pally, Bhadreswar, Hooghly, West Bengal, PIN: 712221, India</p>
          </div>
          <div class="social-links">
            <a href="https://github.com/arque1393" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/aritra-ranjan-chowdhury-a517a0200" target="_blank">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
        <div class="about-text">
          <h2>About Me</h2>
          <p>
            Enthusiastic Computer Science Engineering student, deeply passionate about machine learning, Generative AI, and
            Quantum Computing. A relentless learner, I seek knowledge everywhere to contribute to groundbreaking projects
            that shape the world.
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
