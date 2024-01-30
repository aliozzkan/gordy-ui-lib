# Project Name

Gordy-UI-Lib.

## About the Project

The project provides general information about an application created by the Gordion Technology team.

## Developer

Gordion Technology

## Installation

You can follow the steps below to install the project in your local environment.

1. Clone the repository: `git clone https://github.com/aliozzkan/gordy-ui-lib.git`
2. Navigate to the project folder: `cd ProjectName`
3. Install the necessary dependencies: `npm install`

## Usage

Basic information on how to use the project:

1. Start the application: `npm run storybook`
2. Open the URL `http://localhost:6006` in your browser.



## Example Usage for Developers

You can understand how to contribute to the project by examining some sample codes in this project.

### Sample JavaScript Code

Below is a sample TypeScript code for using a module in the project. 
This code imports the `IconList` function from a utility file named [main.tsx](#) and uses it.


```typescript jsx
// main.tsx

import { IconList } from 'gordy-ui-lib';

// Using the IconList component
<IconList
  maxItemLength={4} // required
  strategy={{...IconListComponentStrategyResponse}} // required
  title="Coponent Title"    // optional
  className="my-5 py-4"     // optional
  showArrows                // optional
  showBullets               // optional
  wrapperBgColor="#f3f3f3"  // optional
  wrapperHeight="auto"      // optional
  wrapperWidth="100%"       // optional
/>