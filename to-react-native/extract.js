const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '..', '.env');
const fileContent = fs.readFileSync(envPath, 'utf-8');

const env = dotenv.parse(fileContent);

const renameTokensParsers = [
  // Update the token names, their group names and collection names to camelCase
  {
    name: 'change-case',
    options: {
      change: 'names',
      toCase: 'camelCase',
      applyTo: {
        // the where statement of the SDTFQuery can accept multiple conditions.
        where: [
          // We use a query to select all collections, their parents and children and update the names and modes
          {
            collection: '.*',
            select: {
              parents: true,
              children: true,
            },
          },
          // With this, we select all groups that are not in collection or do not have collections in them
          {
            group: '.*',
            select: {
              parents: true,
              children: true,
            },
          },
        ],
      },
    },
  },
  // Update the token modes to camelCase
  {
    name: 'change-case',
    options: {
      change: 'modes',
      toCase: 'camelCase',
      applyTo: {
        // the where statement of the SDTFQuery can accept multiple conditions.
        where: [
          // We use a query to select all collections, their parents and children and update the names and modes
          {
            collection: '.*',
            select: {
              parents: true,
              children: true,
            },
          },
          // With this, we select all groups that are not in collection or do not have collections in them
          {
            group: '.*',
            select: {
              parents: true,
              children: true,
            },
          },
        ],
      },
    },
  },
];

const getToReactNativeParser = fileName => {
  // We apply the parser to generate the js files
  // More on this parser here: https://docs.specifyapp.com/reference/parsers/to-react-native
  return {
    name: 'to-react-native',
    output: {
      type: 'file',
      filePath: `to-react-native/outputs/${fileName}.ts`,
    },
    options: {
      typescript: true,
    },
  };
};

const parsers = [
  // All common parsers for CSS custom properties
  // Here the change-case parser is used to convert the token names to camelCase
  ...renameTokensParsers,
  // Create the file
  getToReactNativeParser('theme'),
];

module.exports = {
  version: '2',
  personalAccessToken: env.SPECIFY_PERSONAL_ACCESS_TOKEN,
  repository: env.SPECIFY_TO_REACT_NATIVE_REPOSITORY_NAME,
  rules: [
    {
      name: 'React Native / Theme',
      parsers,
    },
  ],
};
