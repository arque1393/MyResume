import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">Skills</h2>
        <p class="section-subtitle">My technical expertise and proficiencies</p>
        
        <div class="skills-grid">
          <div *ngFor="let category of skillCategories" class="skill-category">
            <h3 class="category-title">{{ category.name }}</h3>
            <div class="skills-container">
              <div *ngFor="let skill of category.skills" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div *ngIf="skill.level" class="skill-level">
                    <div class="level-bar" [style.width.%]="skill.level"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'FORTRAN', level: 70 },
        { name: 'C', level: 75 }
      ]
    },
    {
      name: 'Concepts and Theory',
      skills: [
        { name: 'Machine Learning' },
        { name: 'Deep Learning' },
        { name: 'Generative AI' },
        { name: 'Prompt Engineering' },
        { name: 'Data Science' },
        { name: 'Data Structures' },
        { name: 'Quantum Computing' },
        { name: 'Reinforcement Learning' },
        { name: 'Mathematics' },
        { name: 'Physics' }
      ]
    },
    {
      name: 'Generative AI',
      skills: [
        { name: 'Langchain', level: 90 },
        { name: 'LangGraph', level: 85 },
        { name: 'Llamaindex', level: 80 },
        { name: 'Transformers', level: 85 },
        { name: 'Hugging Face', level: 85 },
        { name: 'OpenAI', level: 90 },
        { name: 'Azure AI Services', level: 80 }
      ]
    },
    {
      name: 'Machine Learning / Deep Learning',
      skills: [
        { name: 'NumPy', level: 90 },
        { name: 'Pandas', level: 90 },
        { name: 'Scikit-Learn', level: 85 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'OpenCV', level: 75 },
        { name: 'NLTK', level: 80 }
      ]
    },
    {
      name: 'Development',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'FastAPI', level: 90 },
        { name: 'Flask', level: 80 },
        { name: 'Streamlit', level: 85 },
        { name: 'PyQt', level: 75 }
      ]
    },
    {
      name: 'Quantum Computing',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Qiskit', level: 85 },
        { name: 'IBM Quantum', level: 85 },
        { name: 'Quantum Algorithms', level: 80 },
      ]
    },
    {
      name: 'Other Tools',
      skills: [
        { name: 'Git' },
        { name: 'Neo4J' },
        { name: 'Unix/Linux' },
        { name: 'VS Code' },
        { name: 'Google Drive API' },
        { name: 'Microsoft Graph' }
      ]
    }
  ];
}
