# kanbanboard

# Flow Kanban Board

A simplified, high-performance Kanban-style task management application built to demonstrate advanced local state management, interactive UI patterns, and data persistence.

## 🚀 Live Demo

[Insert your Netlify URL here after deploying]

## ✨ Features

- [cite_start]**Three-Column Layout**: Dedicated sections for "To Do", "In Progress", and "Done"[cite: 6].
- [cite_start]**Task Management**: Create tasks with titles and descriptions, move them between stages, or delete them[cite: 9, 10, 11].
- [cite_start]**Data Persistence**: State is synced with `localStorage` via Zustand middleware, ensuring tasks remain after a page refresh[cite: 13].
- [cite_start]**Interactive UI**: Hover states, smooth transitions, and distinct empty states for each column[cite: 15, 23].
- [cite_start]**Type Safety**: Fully implemented with TypeScript interfaces for both `Task` and `Column` metadata[cite: 21].

## 🛠️ Technical Stack

- [cite_start]**Framework**: React 18+ [cite: 17]
- [cite_start]**State Management**: Zustand (Lightweight store) [cite: 18]
- [cite_start]**Styling**: SCSS with utility-inspired variables [cite: 17]
- **Build Tool**: Vite
- [cite_start]**Persistence**: Zustand `persist` middleware (localStorage) [cite: 13, 18]

## 🏗️ Architecture & Decisions

- **State Integrity**: To avoid visual glitches and infinite loops, task filtering is derived during the render phase rather than inside selectors.
- [cite_start]**Data Structure**: Uses a flat array of task objects for simple, predictable updates while maintaining strict typed interfaces.
- [cite_start]**UI Polish**: Focused on accessible interaction patterns and consistent spacing to ensure a professional appearance.

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/SakshiBedage/kanbanboard.git](https://github.com/SakshiBedage/kanbanboard.git)
   cd kanbanboard
   ```
2. Install dependencies
   npm install

   3.Run the development server
   npm run dev
