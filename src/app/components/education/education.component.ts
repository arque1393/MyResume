import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
          <div class="education-card">
            <div class="education-header">
              <h3>B.Tech in Computer Science and Engineering</h3>
              <span class="year">2020 - 2024</span>
            </div>
            <div class="institution">Techno International New Town</div>
            <div class="location">Kolkata, West Bengal</div>
            <ul class="achievements">
              <li>Specialized in Machine Learning, AI, and Quantum Computing</li>
              <li>Completed Deep Learning Specialization certification</li>
              <li>NPTEL certification in Joy of Computing Using Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {}
