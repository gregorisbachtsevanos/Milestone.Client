# TaskHub - Client

## Overview

This repository contains the frontend code for the TaskHub, built with React.js. The frontend is responsible for providing a responsive and dynamic user interface that allows users to manage projects, tasks, notes, and roadmaps effectively.

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
- **State Management**: (Choose one, e.g., Redux, Context API, etc.)
- **Styling**: (Choose one, e.g., CSS Modules, styled-components, etc.)
- **HTTP Client**: (Choose one, e.g., Axios, Fetch API)
- **Form Handling**: (Choose one, e.g., Formik, React Hook Form)
- **Routing**: React Router

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/gregorisbachtsevanos/keep-it-secret.git
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
