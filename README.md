# Sunrise Sunset App

## Goal
SPA using React that will allow a user to find out and display the time of sunrise and sunset of five different locations. There are several free APIs that can retrieve this info for you, feel free to use the one of your choice. The flow should be as follows:

- Users are presented with a screen that allows them to enter longitude and latitude for a location, one at a time. When a user hits next, they are able to enter another location, five total.

- Upon filling in the last set of location info, the user should be able to see a screen with all locations, plus the corresponding sunrise and sunset. 

## Summary

Before starting coding I took some time to:
- Understand requirements
- Find free API that satisfies the requirements - https://sunrise-sunset.org/api
- Refresh my knowledge about longitude and latitude :)
- Create low level mockup, create color palette and find icons

While coding:
- Started with CRA
- Created initial form
- Called API using built-in fetch and validated it's response
- Validated user input using HTML5 validation
- Put together quick animation to make it look like different 5 forms for the user
- Created Output component which represents locations and sunrise \ sunset
- Coding time took 3h 10ish mins (not including time to update this README)

What I would additionally do if there's no time restrictions:
- Use `proptypes` in every component;
- Use error properties that I have in Output component to alert the user if something goes wrong.
- Cover components with tests
- Improve Form tab flow
- Allow users to skip to the final screen after filling any arbitrary number of locations (if it doesn't contradict any business requirements for the app)
- Introduce geocoding, so coordinates can be converted to city names and become more user friendly.

## How to use the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Attributions

Icons used here are made by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/)
