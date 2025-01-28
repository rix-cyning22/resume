# Resume App

This is a React application that hosts my resume. The application is designed to be deployed on GitHub Pages.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/resume-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd resume-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the App

To start the development server, run:

```sh
npm start
```

This will open the app in your default web browser.

### Deployment

To deploy the app to GitHub Pages, follow these steps:

1. Open `package.json` and add the following properties:
   ```json
   "homepage": "https://your-username.github.io/resume-app",
   "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
   }
   ```
2. Install the `gh-pages` package:
   ```sh
   npm install --save-dev gh-pages
   ```
3. Deploy the app:
   ```sh
   npm run deploy
   ```

Your resume app should now be live at `https://your-username.github.io/resume-app`.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [GitHub Pages](https://pages.github.com/) - Hosting service for static websites

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
