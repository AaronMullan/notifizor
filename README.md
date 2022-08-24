# About

### Deployed version: https://notifizor.herokuapp.com/

Notifizor is a notification app to show the latest climate news from the New York Times.

The app uses localStorage to keep two collections: One is an array of `Notifications` and the other is an array of `Dismissed Notifications`. On page load the app calls to the NYT api to get the latest 10 climate-related articles and adds any unique ones to the `Notifications` array. The notifications are then displayed on cards. Any notifications which have been `Dismissed` are not displayed.

Each card has two buttons: `View` or `Dismiss`. View links to the article, and Dismiss adds that notification to the `Dismissed` array. A global Dismissal reset button is at the bottom of the page.

## To Run locally

Clone the repo. You will need to add a .env file with a value for `REACT_APP_API_KEY`.
One operational value can be found by concatenating these two strings: 'futtqKINnROoG8E' and 'JLtBnx9E45xEo2Zj0'.

In the project directory, you can run:

### `npm i`

Installs dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
