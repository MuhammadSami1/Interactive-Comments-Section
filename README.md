# Comment Section

A feature-rich comment section built with **Next.js**, **TypeScript**, and **Jotai**, designed to demonstrate dynamic functionality and state management in modern web applications. This project also showcases the integration of development tools like Husky, Prettier, and ESLint for maintaining a clean and consistent codebase.

## 🚀 Features

- **Add Comments**: Users can write and post comments.
- **Reply to Comments**: Nested reply functionality for threaded discussions.
- **Edit and Delete Comments**: Modify or remove existing comments.
- **Local Storage Persistence**: Comments are saved locally for a consistent user experience across sessions.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Developer Tooling**:
  - **Husky** for pre-commit hooks.
  - **Prettier** for consistent code formatting.
  - **ESLint** for identifying and fixing code issues.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.0.3)
- **Language**: TypeScript
- **State Management**: [Jotai](https://jotai.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Headless UI](https://headlessui.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

---

## 🧑‍💻 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js**: >= 16.x
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/commentsection.git
   cd commentsection
   ```
2. Install dependencies:
   ```bash
   pnpm i
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```

## 📦 Scripts

Here are the available npm scripts:

- **pnpm run dev**: Starts the development server with Turbopack.
- **pnpm run build**: Builds the application for production.
- **pnpm run start**: Starts the production server.
- **pnpm run lint**: Lints the codebase using ESLint.
- **pnpm run prepare**: Initializes Husky for Git hooks.

## 🧹 Code Quality Tools

This project integrates several tools to maintain a high-quality codebase:

- **Husky**: Runs pre-commit hooks for linting and formatting.
- **Prettier**: Automatically formats code.
- **ESLint**: Ensures adherence to coding standards.
- **Lint-Staged**: Formats staged files before committing.

## 🌐 Live Demo

Check out the live version of the project here:
https://interactive-comments-section-puce.vercel.app/

## ✨ Future Improvements

- **Fix issues with editing and deleting replies in the nested reply structure.**
- **Implement unit tests to ensure robustness.**
- **Add backend integration for persistent data storage.**
