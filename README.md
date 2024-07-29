# Diary App

Represents a Coding Challenge of an interactive Diary App built with React. This version is a pure frontend implementation without persistent storage

## Features
- Create Diary Entries: Users can create new diary entries with a title, content, and tags.
- View Diary Entries: All diary entries are displayed in a list. Each entry shows the title, content, and tags.
- Manage Diary Entries: Users can delete diary entries. They can also filter entries by tags.

## File Structure
- `DiaryEntry.js`: This is the main component of the app. It handles the creation and display of diary entries.
- `DiaryEntry.css`: This file contains all the styles for the DiaryEntry component.
- `index.js`: This is the entry point of the app. It renders the DiaryEntry component.

# Setup

1. Clone the Project and run `npm install` in your terminal
2. Once the repo is cloned cd into the folder and run `npm start`

# Deployment
1. Run `npm run build` to create a production build
2. Run `npm run deploy:pages` to deploy the app to Github Pages

Visit the Link below to see the deployed version of the app:

https://martinstraussberger.dev/diary-app/

*Troubleshooting:*
- If the deployment fails, delete the previous build folder and try again

### Notes UX:

- Tag container does not except a specific tag twice
- A Tag is created if the user presses the "Space" Key
