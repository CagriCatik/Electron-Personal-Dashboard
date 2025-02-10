# Personal Dashboard

**Personal Dashboard** is a responsive, interactive desktop application built with React and Electron. It provides a customizable interface for managing and visualizing personal data, events, and projects. The dashboard includes multiple pages—Home, Dashboard, Calendar, and Profile—each featuring modern UI components, interactive charts, and event management functionalities.

> **Note:** This project is designed to run as both a web app and a desktop application via Electron.

## Features

- **Responsive Design:**  
  Adapts seamlessly for desktop and mobile devices. On desktop, a collapsible sidebar provides navigation; on mobile, the sidebar converts into a bottom navigation bar.

- **Electron-Powered Desktop App:**  
  Run your dashboard as a standalone desktop application on Windows, macOS, or Linux using Electron.

- **Collapsible Sidebar:**  
  Easily toggle the sidebar to expand or collapse navigation links, allowing you to focus on content.

- **Interactive Dashboard:**  
  The Dashboard page includes sample charts (using [Chart.js](https://www.chartjs.org/) via [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)) to visualize data such as monthly sales or project metrics.

- **Calendar & Event Management:**  
  The Calendar page is powered by [react-calendar](https://github.com/wojtekmaj/react-calendar) and features:
  - A calendar widget for selecting dates.
  - A dynamic event list that displays events for the selected date.
  - A form to add new events.
  - Functionality to delete events.

- **Personalized Home Page:**  
  A feature-rich Home page with a hero section, feature highlights, and an about section to introduce the dashboard and its capabilities.

- **Footer with Useful Links:**  
  A footer component that provides navigation to privacy policies, terms of service, and contact information.

## Demo

![Dashboard Demo](https://via.placeholder.com/800x400?text=Dashboard+Demo)

*(Replace the above image with a screenshot or GIF of your project.)*

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/personal-dashboard.git
   cd personal-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running in Development

#### As a Web App

1. **Start the React development server:**

   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000).

#### As an Electron Desktop App

1. **Start Electron in development mode:**

   (Assuming you have configured your Electron main process in `main.js` and added a script in `package.json` such as `"electron-dev": "electron ."`)

   ```bash
   npm run electron-dev
   ```

   This will launch the desktop version of your Personal Dashboard.

### Building for Production

To package your application as a standalone desktop app using Electron (e.g., via [electron-builder](https://www.electron.build/)), run:

```bash
npm run build
npm run electron-pack
```

*(Make sure you have the appropriate scripts defined in your `package.json` for building the React app and packaging the Electron app.)*

## Project Structure

```
personal-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── electron/              # Electron-specific files (e.g., main.js, preload.js)
│   ├── pages/
│   │   ├── Home.js            // Home page with hero, features, and about sections
│   │   ├── Dashboard.js       // Dashboard with interactive charts
│   │   ├── Calendar.js        // Calendar with event management functionality
│   │   └── Profile.js         // User profile page
│   ├── App.js                 // Main application component with routing, navbar, sidebar, and footer
│   ├── App.css                // Global styles
│   ├── index.js               // React application entry point
│   └── ...                    // Other assets and components
└── package.json
```

## Dependencies

- **React**  
- **React Router DOM:** For client-side routing.
- **React Icons:** For modern iconography.
- **react-chartjs-2** & **Chart.js:** For rendering interactive charts on the Dashboard.
- **react-calendar:** For calendar functionality and event management.
- **Electron:** For building and running the desktop application.

## Customization

- **Styling:**  
  Modify `App.css` and individual page CSS files (e.g., `src/pages/Home.css`) to adjust the look and feel of your dashboard.

- **Components:**  
  Each page is modular. Customize the components in the `src/pages` directory to suit your requirements.

- **Data & Functionality:**  
  Replace the sample data and functions (e.g., event management in Calendar) with your own logic to integrate dynamic data sources or API calls.

- **Electron Integration:**  
  Customize your Electron main process (e.g., in `src/electron/main.js`) to handle window creation, system tray integration, auto-updates, etc.
