import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  type: 'academic' | 'personal';
  goal?: string;
  description: string[];
  techStack: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Document Processing Layout Detection',
      type: 'academic',
      goal: 'Automatically analyze bank cheque, estimate layout, and identify key components like account numbers, amounts, signatures, dates, and more.',
      description: [
        'Goal: Automatically analyze bank cheque, estimate layout, and identify key components like account numbers, amounts, signatures, dates, and more.',
        'Method: Considered it an object localization problem where the signature, date account number, and amount are considered objects and tried to figure it out.'
      ],
      techStack: 'Python, OpenCV, TensorFlow, YOLO Architecture',
      githubLink: 'https://github.com/arque1393'
    },
    {
      title: 'Face Recognition',
      type: 'personal',
      description: [
        'Face Recognition Project using Deep Neural Network using Tensorflow Library in Python.',
        'Implement a face recognition system from scratch. design model using Siamese architecture of the neural network.',
        'Initially detection of clear faces and then extracting and recognizing them.'
      ],
      techStack: 'Python, Tensorflow, Keras',
      githubLink: 'https://github.com/arque1393'
    },
    {
      title: 'Data Science and Data Processing',
      type: 'personal',
      description: [
        'Experienced in working with data using Pandas, Numpy, etc Python-based data-frame and mathematical libraries and matplotlib, seaborn, etc data visualization library.',
        'Implement all data processing concept data managing concepts in Kaggle datases and use and implement ML models using Scikit-learn.',
        'Work on data based prediction like Weather forecasting, Time Series Analysis, Flood prediction, and Sentiment analysis.'
      ],
      techStack: 'Python, Pandas, Numpy, Matplotlib, Scikit-learn',
      githubLink: 'https://github.com/arque1393'
    },
    {
      title: 'EigenFlow: Web based IDE for data scientist',
      type: 'personal',
      goal: 'Build an IDE to develop Machine Learning Models, using Visual Scripting or GUI-based technology and a default Code editor and Note Book feature.',
      description: [
        'Build an IDE to develop Machine Learning Models, using Visual Scripting or GUI-based technology',
        'Implemented default Code editor and Note Book feature'
      ],
      techStack: 'Frontend: Javascript, React, Reactflow, Rcdock | Backend: FastAPI, IPython, Numpy, Pandas, Matplotlib',
      githubLink: 'https://github.com/arque1393'
    },
    {
      title: 'Quantum Computing and Quantum Algorithm',
      type: 'personal',
      description: [
        'Learning Quantum Computing and Implement a few basic Quantum Algorithm',
        'Implemented Quantum Teleportation, Deutsch–Jozsa, Grover\'s Search, Shor\'s Algorithm, Variational Quantum Eigen-solver (VQE)'
      ],
      techStack: 'Qiskit, Pennylane',
      githubLink: 'https://github.com/arque1393'
    },
    {
      title: 'Reinforcement Learning Project',
      type: 'personal',
      description: [
        'Studying Reinforcement Learning. Improve skill from DeepMind courses. Explore TF-Agent, OpenAI-Gym',
        'Build a self-playing snake game with a Deep Q Network.'
      ],
      techStack: 'Python, Pygame, PyTorch',
      githubLink: 'https://github.com/arque1393'
    },
    {
      title: 'Student Management System',
      type: 'personal',
      description: [
        'A PyQt Based desktop Application implemented in PySide6 framework connected with Remote API',
        'Database management implemented by Django-rest-framework',
        'Integrated with a Basic GUI Code Editor with multiple Tab feature',
        'Multiple programming language features. Compatible with Python, C, C++, and JAVA'
      ],
      techStack: 'Python, Pyside6, Django, Django Rest Framework',
      githubLink: 'https://github.com/arque1393'
    }
  ];
}
