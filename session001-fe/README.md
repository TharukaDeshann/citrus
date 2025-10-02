# Session001 Frontend

## Quick start

1. Install dependencies
2. Start the dev server

The app runs with Create React App + Tailwind. A proxy to the backend can be set in `package.json` or via `REACT_APP_API_URL`.

## New demo page: Tool Details

- Path: `/tools/drill`
- File: `src/pages/ToolDetails/index.tsx`
- Shows a white card layout with:
	- Tool image and specs
	- Borrow history table
	- Repair history table
	- All data is mocked in the component

To access:

- Start the dev server then visit http://localhost:3000/tools/drill

# Citrus65 React Template

This template provides a modern React application with TypeScript, Redux Toolkit, Tailwind CSS, and a comprehensive component library.

## Features

- ⚡️ **React 18** with TypeScript
- 🗃️ **Redux Toolkit** for state management with Redux Saga
- 🎨 **Tailwind CSS** for styling
- 🧭 **React Router** for navigation
- 📱 **Responsive Design** with mobile-first approach
- 🎯 **Component Library** with reusable UI components
- 🔐 **Authentication** setup with JWT
- 📊 **Dashboard** with D3.js charts
- 🌙 **Dark Mode** support with next-themes
- 📋 **Form Management** with Formik and Yup
- 🔄 **Data Fetching** with Axios
- 🎭 **Icons** from Lucide React
- 📦 **Modern Build Setup** with Create React App

## Quick Start

Create a new project using this template:

\`\`\`bash
npm create aventude-citrus65client@latest my-app
cd my-app
npm start
\`\`\`

Or with yarn:

\`\`\`bash
yarn create aventude-citrus65client my-app
cd my-app
yarn start
\`\`\`

Or with pnpm:

\`\`\`bash
pnpm create aventude-citrus65client@latest my-app
cd my-app
pnpm start
\`\`\`

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### \`npm test\`

Launches the test runner in interactive watch mode.

### \`npm run build\`

Builds the app for production to the \`build\` folder.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can't go back!**

## Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── base/           # Base components (Loading, LazyPage)
│   └── shared/         # Shared UI components
├── config/             # Configuration files
├── constants/          # Application constants
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/              # Page components
├── router/             # Routing configuration
├── services/           # API services
├── store/              # Redux store configuration
├── styles/             # Global styles
├── templates/          # Page templates
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
\`\`\`

## Key Components

### Authentication
- Login/logout functionality
- JWT token management
- Protected routes

### UI Components
- **Button** - Customizable button component
- **Card** - Flexible card component
- **Form Controls** - Input, textarea, checkbox, select
- **Navigation** - Breadcrumb, sidebar navigation
- **Theme Toggle** - Dark/light mode switcher

### State Management
- Redux Toolkit for global state
- Redux Saga for async operations
- Redux Persist for state persistence

### Styling
- Tailwind CSS utility classes
- Custom theme configuration
- Responsive design system
- Dark mode support

## Customization

### Theme Configuration
Edit \`tailwind.config.js\` to customize your theme colors, fonts, and spacing.

### API Configuration
Update \`src/config/urls.ts\` to set your API endpoints.

### Routes
Add new routes in \`src/router/routes.tsx\` and \`src/constants/routes/index.ts\`.

## Learn More

To learn more about the technologies used in this template:

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This template is MIT licensed.