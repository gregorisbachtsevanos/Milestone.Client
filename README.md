# Milestone

## Overview

This repository contains the frontend codebase for Milestone, a powerful project management tool. Developed with React.js and TypeScript, this frontend application delivers a highly responsive and intuitive user interface. It enables users to efficiently manage projects, tasks, notes, and roadmaps, providing real-time updates and seamless interaction. Milestone's frontend is designed to enhance productivity through a user-friendly experience, allowing teams to stay organized, track progress, and achieve their goals with ease.

## Features

- **Project Management**
  - Create and manage projects.
  - Organize tasks with parent and sub-task structures.
  - Add comments on tasks for collaboration.
  
- **Notes**
  - Write and manage project-specific notes.
  - Manage general notes for ideas and business strategies.

- **Roadmap**
  - Visual roadmap with calendar integration to track milestones.
  - Schedule tasks and deadlines.
  
- **Notifications**
  - Receive alerts for upcoming deadlines and task progress.

## Tech Stack

- **Framework**: React.js
- **Language**: TypeScript
- **State Management**: RTK
- **Styling**: styled-components
- **HTTP Client**: RTK Query
- **Form Handling**: React Hook Form
- **Routing**: React Router

## Getting Started

### Prerequisites

- Node.js
- npm
- TypeScript

### Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/gregorisbachtsevanos/Milestone.Client.git
   ```

2. **Create a .env file in the root of your project and add your Firebase config:**
   ```
   VITE_API_URL= 
   VITE_API_URL= 
   ```
   
3. **Install dependencies**:
   ```bash
   cd TaskHub
   npm install 
   ```
   
4. **Start the development server**:
   ```
   npm run dev:uat
   ```
   
5. **Start the production server**:
   ```
   npm run dev:prod
   ```

6. **Building for Production**:
   ```
   npm run build:uat
   npm run build:prod
   ```
   
### Project Structure
```
src/\
├── components/\
├── pages/\
├── assets/\
├── styles/\
├── utils/\
├── hooks/\
├── context/\
└── App.tsx
```

License
This project is licensed under the MIT License - see the LICENSE file for details.
