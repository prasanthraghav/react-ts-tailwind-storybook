# Integrating React, TypeScript, Tailwind CSS and Storybook

### Create a React project using creact-react-app cli with TypeScript
```
npx create-react-app project1 --template typescript
```

### Add Tailwind CSS to the project
```
yarn add tailwindcss node-sass
yarn add -D autoprefixer postcss-nested postcss-cli npm-run-all postcss-import postcss-preset-env
```

### Create a new file called postcss.config.js on the root of the app with the code below.
```
module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
```

### Add scripts in the `package.json`
```
"scripts": {
    "build:tailwind": "postcss src/scss/base.scss -o src/scss/tailwind.scss",
    "watch:tailwind": "postcss src/scss/base.scss -o src/scss/tailwind.scss -w",
    "start-js": "react-scripts start",
    "build-js": "react-scripts build",
    "start": "npm-run-all -p watch:tailwind start-js",
    "build": "npm-run-all build:tailwind build-js",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```




## Available Scripts

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

## References
https://dev.to/puritanic/add-postcss-to-create-react-app--5hj8
https://dev.to/elisealcala/start-a-component-library-with-storybook-tailwind-and-typescript-2ofa
