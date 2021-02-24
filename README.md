# Who Got The Booch? Kombucha Taproom

### Created: 2.19.2021 | Last Updated: 2.19.2021

## 📊 Project Overview

### **Description**

This application displays the landing page for Got The Booch Kombucha Taproom. A user may add, view, and delete kegs. A user may also purchase a pint from a keg.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### **Component Diagram**

[![components.jpg](https://i.postimg.cc/WzP05LnX/components.jpg)](https://postimg.cc/HcBJLNFy)

### **Technologies Used**

VS Code \
HTML \
CSS \
JavaScript \
React \
Redux

### **Known Bugs**

None.

### **Test Specs**

<details>
<summary>Expand to show specs</summary>

<table>
  <tr>
    <th>Test #</th>
    <th>Expected Behavior</th>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>1</td>
    <td>formVisibleReducer should return default state if no action type is recognized</td>
    <td>formVisibleReducer(false, { type: null })</td>
    <td>false</td>
  </tr>
  <tr>
    <td>2</td>
    <td>formVisibleReducer should toggle form visibility state to true</td>
    <td>formVisibleReducer(false, { type: 'TOGGLE_FORM' })</td>
    <td>true</td>
  </tr>
  <tr>
    <td>3</td>
    <td>kegListReducer should return default state if no action type is recognized</td>
    <td>kegListReducer({}, { type: 'null' })</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>4</td>
    <td>kegListReducer should successfully add new keg data to masterKegList</td>
    <td>kegListReducer({}, { type: 'ADD_KEG' })</td>
    <td>{"keg object containing all required properties"}</td>
  </tr>
  <tr>
    <td>5</td>
    <td>kegListReducer should successfully delete keg data from masterKegList</td>
    <td>kegListReducer({}, { type: 'DELETE_KEG' })</td>
    <td>Chosen keg will be removed, leaving all remaining kegs in masterKegList</td>
  </tr>
  <tr>
    <td>6</td>
    <td>rootReducer should return default state if no action type is recognized</td>
    <td>rootReducer({}, { type: null })</td>
    <td>masterKegList: {}, formVisibleOnPage: false</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Initial state of kegListReducer matches rootReducer</td>
    <td>expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }))</td>
    <td>True</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Initial state of formVisibleReducer matches rootReducer</td>
    <td>expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }))</td>
    <td>True</td>
  </tr>
  <tr>
    <td>9</td>
    <td>ADD_KEG action works for kegListReducer and rootReducer</td>
    <td>expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action))</td>
    <td>True</td>
  </tr>
  <tr>
    <td>10</td>
    <td>TOGGLE_FORM action works for formVisibleReducer and rootReducer</td>
    <td>expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action))</td>
    <td>True</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Action creator 'deleteKeg' should create DELETE_KEG action</td>
    <td>actions.deleteKeg(1)</td>
    <td>type: 'DELETE_KEG', id: 1</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Action creator toggleForm should create TOGGLE_FORM action</td>
    <td>actions.toggleForm()</td>
    <td>type: 'TOGGLE_FORM'</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Action creator addKeg should create ADD_KEG action</td>
    <td>actions.addKeg()</td>
    <td>type: 'ADD_KEG'</td>
  </tr>
  <tr>
    <td>14</td>
    <td>toggleEditReducer should return default state if no action type is recognized</td>
    <td>toggleEditReducer(false, { type: 'null' })</td>
    <td>false</td>
  </tr>
  <tr>
    <td>15</td>
    <td>toggleEditReducer should toggle form visibility state to true</td>
    <td>toggleEditReducer(false, { type: 'TOGGLE_EDIT' })</td>
    <td>True</td>
  </tr>
</table>


</details>

<br>

## 💻 View Locally/Project Setup

### **Code Editor**

To open the project on your local machine, you will need to download and install a code editor. The most popular choices are [Atom](https://atom.io/) and [Visual Studio Code](https://code.visualstudio.com/). Visual Studio Code is the code editor used to create this application.

### **Clone**
1. Follow above steps to install necessary software.
2. Open web browser and go to https://github.com/cschweig2/kombucha-taproom-redux.
3. After clicking the green "code" button, you can copy the URL for the repository.
4. Open a terminal window, such as Command Prompt or Git Bash, and navigate to the folder you wish to keep this project in.<br>
  4a. Type in this command: `git clone` , followed by the URL you just copied. The full command should look like this: `git clone https://github.com/cschweig2/kombucha-taproom-redux` .
5. View the code on your favorite text editor.

### **Download**
1. Click [here](https://github.com/cschweig2/kombucha-taproom-redux) to view project repository.
2. Click "Clone or download" to find the "Download ZIP" option.
3. Click "Download ZIP" and extract files.
4. Open the project in a text editor by clicking on any file in the project folder.

### **Getting Started**

In the project directory, you can run:

#### `npm install`

Installs node modules required to get started.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

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

## 💡 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 📧 Support and contact details

If you run into any issues, you can contact the creator at chelraebecker@gmail.com, or make contributions to the code on GitHub via forking and creating a new branch.

## 📝 Contributors

<table>
  <tr>
    <th>Author</th>
    <th>GitHub Profile</th>
    <th>Contact Email</th>
  </tr>
  <tr>
    <td>Chelsea Becker</td>
    <td>https://github.com/cschweig2</td>
    <td>chelraebecker@gmail.com</td>
  </tr>
</table>

##  Legal

*This software is licensed under the MIT license.*

Copyright (c) 2021 **Chelsea Becker**