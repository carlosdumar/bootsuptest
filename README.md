# BootsUp Test with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

First of all, install the dependencies running this command

### `npm install`

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


# Project structure folder

This a project which is structured to use React, Redux/Redux Toolkit and Typescript.

## Redux/Redux Toolkit

It is compound by a slice file which container the action types, action creators and reducer cases. Redux Toolkit comes with a function called createSlice with help us to reduce the boilerplate genereted by the vanilla Redux.

createSlice expects and initialState, a reducer fuctions and a slice name.

The slice was called reports based on the api provided.

Redux Toolkit comes the function createStore, which helps to create a store with better performance we used to.

Beside that, there are middleware and enhancers files wich  help us to track the dispatch actions and the time the reducers take to change the state.

## React

The test is compound basically by a component called Home which held the main app. On this there is an chart imported from 'react-google-charts' component. Based on its api the props were set to show the confirmed cases and deaths in USA in 2019.

Axios libray was used to call the api provided. The config file was set to be ready for the requested configuration.

## Typescript

Typescript was used to provided a type system to the app. Redux Toolkit provided us with some type to help us with this task, Dispatch, PayloadAction are one of them.