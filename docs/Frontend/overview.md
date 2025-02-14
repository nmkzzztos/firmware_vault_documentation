---
id: overview
title: Overview
---

This project is an Angular-based frontend application designed to manage firmware, execute SQL queries, and monitor jobs. It leverages Bootstrap for styling and AG Grid for dynamic data visualization.

## Technologies Used
- **Framework:** Angular 17
- **UI Components:** Bootstrap 5, NG Bootstrap
- **Grid System:** AG Grid
- **Code Editors:** Ace Editor, CodeMirror
- **State Management & Services:** RxJS, HttpClient

## Installation & Setup
### Prerequisites
- [Node.js](https://nodejs.org/en/download) (>= 14.x)
- [Angular CLI](https://angular.dev/tools/cli) (>= 17.x)

**Installation**
```sh
npm install
```

**Running the Application**
```sh
npm start
```
with Angular CLI
```sh
ng serve
```
This will start a development server at `http://localhost:4200/`.


**Building the Application**
```sh
npm run build
```
This command compiles the project for production.

:::info
To connect to the backend Docker container from your local environment, you must update the backend URL in the `config.json` file.

```json
{
  "frontend":  {
    "baseUrl":  "http://localhost:5000/"
  }
}
:::

## Project Structure
### Core Modules
- **App Module (`app.module.ts`)**
  - Configures core dependencies and initializes services.
- **Routing Module (`app-routing.module.ts`)**
  - Defines routes and navigation logic.

### Main Components
| Component | Description |
|-----------|-------------|
| **Firmware Vault** | Manages firmware and product data |
| **Data Explorer** | Provides an SQL query interface for data exploration |
| **Jobs Dashboard** | Displays job status and execution history |
| **Navigation Bar** | Handles application navigation |

## Routing Configuration
The application uses Angular's RouterModule (`app-routing.module.ts`) to define routes. Below are the main routes:

```ts
const routes: Routes = [
  { path: '', redirectTo: 'firmware-vault', pathMatch: 'full' },
  { path: 'firmware-vault', component: FirmwareVaultComponent },
  { path: 'data-explorer', component: DataExplorerComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/detail/:id', component: JobsDetailComponent },
];
```

## Key Features
- **SQL Query Builder**: Allows users to execute SQL queries dynamically.
- **Firmware Management**: Provides an interface to manage firmware files.
- **Job Monitoring**: Enables users to track job execution status.
- **Dynamic Tables**: Uses AG Grid for advanced data visualization.
- **Responsive UI**: Built with Bootstrap for optimal user experience.

## Future Enhancements
- Add real-time job execution monitoring.
- Improve UI/UX with additional styling and animations for better jobs analysis.