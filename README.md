# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


Overview
Our ChatBot frontend is built using React, a popular JavaScript library for building user interfaces. It communicates with a backend service (not included in this repository) to provide chat functionality using Google's Generative AI API.

Features
Real-time Chat: Engage in real-time conversations with the ChatBot.
Multilingual Support: Switch between languages using the language selection feature.
User Profiles: View user profile information based on preferences.
Error Handling: Handles network errors and API errors gracefully.
Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have the following installed on your development machine:

Node.js and npm (or yarn)
Git
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd chatbot-frontend
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Usage
To start the development server and view the application in your browser:

bash
Copy code
npm start
# or
yarn start
The application will be running at http://localhost:3000 by default.

Project Structure
The project structure is organized as follows:

java
Copy code
chatbot-frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── ChatBot.tsx
│   │   ├── LoginForm.tsx
│   │   └── ...
│   ├── types/
│   │   └── index.ts
│   ├── i18n/
│   │   └── index.ts
│   ├── mockData/
│   │   └── mockUserProfile.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.ts
│   └── ...
│
├── .env.local
├── package.json
├── README.md
└── ...
Contributing
We welcome contributions to improve our ChatBot frontend. To contribute:

Fork the repository.
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
License
This project is licensed under the MIT License.

Author
This ChatBot frontend was created by Evette Rushing.



