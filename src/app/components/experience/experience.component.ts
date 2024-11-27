import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  domain: string;
  goal: string;
  responsibilities: string[];
  techStack: string;
}

interface Experience {
  company: string;
  position: string;
  period?: string;
  projects: Project[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Promact Infotech Pvt. Ltd',
      position: 'Software Engineer',
      projects: [
        {
          title: 'Geo Reference Automation Pipeline (geogpt)',
          domain: 'Computer Vision and Generative AI',
          goal: 'Creating Automation Pipeline using AI for Geo reference on hand drawn image to real map.',
          responsibilities: [
            'Working with very old scanned norwegian documents and hand-drawn images/diagrams.',
            'Processing Documents using Vision models and OCR tools to extract information like address, location, orientation, legends markers, elevation, legend description, Scale of map etc.',
            'Using extracted information match the image with actual map and store the legends points related to map coordinate in database.',
            'Implement the whole pipeline with FastAPI server. use multiprocessing for analyze documents.'
          ],
          techStack: 'Python, Azure Vision, Azure OCR, ultralytics(YOLO), Huggingface(Diffusion Model), ArcGis, OpenCV, FastAPI, Azure Blob Storage'
        },
        {
          title: 'Bharatlaw.ai',
          domain: 'Generative AI',
          goal: 'Creating a AI assist Research Platform for indian legal documents.',
          responsibilities: [
            'Implement RAG based Search on millions of legal documents.',
            'Degitalized Legal Form using OCR Technology.',
            'Creating Agent based system to handle multiple situations.'
          ],
          techStack: 'Python, Flask, Easy OCR, Langchain, Voyege AI'
        },
        {
          title: 'HR Voice Assistant Chatbot',
          domain: 'Generative Voice AI and RAG',
          goal: 'Creating Voice Assistance for RAG based QA on HR Policies.',
          responsibilities: [
            'Embedded all HR polices documents and Store in Vector database.',
            'Creating a chat and memory based RAG pipeline using LLM.',
            'Implement Live Transcript of human voice',
            'Generate response against the Question and convert response to human like voice.',
            'Handle natural interruption on system'
          ],
          techStack: 'Python, Deepgram AI, Llama Index, OpenAI, FastAPI, Postgresql'
        }
      ]
    },
    {
      company: 'Promact Infotech Pvt. Ltd',
      position: 'Intern',
      period: 'January 22 - April 26',
      projects: [
        {
          title: 'Intelligent Document Retrieval from Drive',
          domain: 'Generative AI',
          goal: 'Building an intelligent document retrieval system with multi-user support',
          responsibilities: [
            'Developed an Intelligent Document Retriever Software for question answers with multi-user support',
            'Implemented automatic document retriever from Google Drive and One Drive with user authentication',
            'Used multi-threading for monitoring Google Drive and OneDrive activities',
            'Added support for multiple document formats (PDF, Docs, HTML) with Q&A capabilities'
          ],
          techStack: 'Python, Llama Index, FastAPI, Google Cloud Drive API, Microsoft Graph API'
        },
        {
          title: 'Conversational AI Bus Booking System',
          domain: 'Generative AI',
          goal: 'Creating an intelligent chatbot for bus booking services',
          responsibilities: [
            'Developed an agent-based system to handle multiple situations',
            'Integrated multiple API tools with intelligent agent decision making',
            'Implemented web search fallback for irrelevant questions',
            'Created persistent chat sessions with history'
          ],
          techStack: 'Python, FastAPI, Langchain, Langsmith'
        },
        {
          title: 'Bharatlaw.ai Unit Tasks',
          domain: 'Natural Language Processing',
          goal: 'Implementing various NLP tasks using Hugging Face models',
          responsibilities: [
            'Text Translation (English to Gujarati)',
            'Text to Speech Summarization',
            'Research Book Name Generation'
          ],
          techStack: 'Python, Hugging Face Transformers, Various API Tools'
        }
      ]
    }
  ];
}
