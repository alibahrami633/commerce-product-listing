# E-Commerce Sample App

## How to use the App
- After the installation, Simply just search through the products list or filter the displayed products by its type.
- The search bar will look for the string matches in product names and product type and filters the outcome accordingly.


## How to intall the project
1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Please refer to the link above to see how to run create-react-app.
3. After running it, just copy "src" folder, package.json file into your project installed folder.
4. Run "npm install" in this folder to install the required packages.

## How to run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`- Please note that snapshot tests are runningin this project. The snapshot folder is not commited to the repository. So, if yourun the tests and made any changes on the code afterwards, please update your local snapshots by pressong 'u' while the test command is running.`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Future Improvements

The project has some parts that can be improved with enough time. Here are the suggestions for the future developments:
- The Search bar and filter can be separated from the app screen into re-usable components
- This implementation requires more time and other libraries such as Redux or internal React libraries such as Context
- A global "Products" state can be defined and changed by multiple tools such as search bar and filtering tool independently and the new state can be updated/consumed by the product catalogue component.

## Considerations
- I personally decided not to use any UI frameworks/libraries and just to go with pure CSS as I believe it can cause some complications as a project gets larger. It may result in more work at the beginning of any project with only CSS, but in the long run, the styling maintenance/updates would be easier if there is a common CSS library or small framework that is designed and developed by the team.
- The data file is located in assets folder to be portable. In the future development, it can be replaced with API endpoints which should be defined/located in services->api folder (e.g., getProducts.ts, addProduct.ts, etc.).
