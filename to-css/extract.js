const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '..', '.env');
const fileContent = fs.readFileSync(envPath, 'utf-8');

const env = dotenv.parse(fileContent);

const commonCssCustomPropertiesParsers = [
  // Update the token names, their group names and collection names to kebab-case
  {
    name: 'change-case',
    options: {
      change: 'names',
      toCase: 'kebabCase',
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
  // Update the token modes to kebab-case
  {
    name: 'change-case',
    options: {
      change: 'modes',
      toCase: 'kebabCase',
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

const getToCssCustomPropertiesParser = fileName => {
  // We apply the parser to generate the css files
  // More on this parser here: https://docs.specifyapp.com/reference/parsers/to-css-custom-properties
  return {
    name: 'to-css-custom-properties',
    output: {
      type: 'file',
      filePath: `to-css/outputs/${fileName}.css`,
    },
  };
};

const colorParsers = [
  // We only want to extract colors from the "colors" collection
  {
    name: 'filter',
    options: {
      query: {
        where: {
          collection: '^Colors$',
          select: {
            children: true,
          },
        },
      },
    },
  },
  // All common parsers for CSS custom properties
  // Here the change-case parser is used to convert the token names to kebab-case
  ...commonCssCustomPropertiesParsers,
  // Create the file
  getToCssCustomPropertiesParser('colors'),
];

const gradientsParsers = [
  // We only want to extract colors from the "Colors styles" group"
  {
    name: 'filter',
    options: {
      query: {
        where: {
          group: '^Color styles$',
          select: {
            children: true,
          },
        },
      },
    },
  },
  // All common parsers for CSS custom properties
  // Here the change-case parser is used to convert the token names to kebab-case
  ...commonCssCustomPropertiesParsers,
  // Create the file
  getToCssCustomPropertiesParser('gradients'),
];

const shadowsParsers = [
  // We only want to extract colors from the "Effect styles" group"
  {
    name: 'filter',
    options: {
      query: {
        where: {
          group: '^Effect styles$',
          select: {
            children: true,
          },
        },
      },
    },
  },
  // All common parsers for CSS custom properties
  // Here the change-case parser is used to convert the token names to kebab-case
  ...commonCssCustomPropertiesParsers,
  // Create the file
  getToCssCustomPropertiesParser('shadows'),
];

const textStylesParsers = [
  // We only want the text styles from the "Text styles" group
  {
    name: 'filter',
    options: {
      query: {
        where: {
          group: '^Text styles$',
          select: {
            children: true,
          },
        },
      },
    },
  },
  // We still want the change case to be applied
  ...commonCssCustomPropertiesParsers,
  {
    name: 'to-css-text-style',
    options: {
      // We apply an option here, more on the parser here: https://docs.specifyapp.com/reference/parsers/to-css-text-style
      genericFamily: 'sans-serif',
    },
    output: {
      type: 'file',
      filePath: 'to-css/outputs/text-styles.css',
    },
  },
];

module.exports = {
  version: '2',
  personalAccessToken: env.SPECIFY_PERSONAL_ACCESS_TOKEN,
  repository: env.SPECIFY_TO_CSS_REPOSITORY_NAME,
  rules: [
    {
      name: 'CSS / Colors',
      parsers: colorParsers,
    },
    {
      name: 'CSS / Gradients',
      parsers: gradientsParsers,
    },
    {
      name: 'CSS / Shadows',
      parsers: shadowsParsers,
    },
    {
      name: 'CSS / Text Styles',
      parsers: textStylesParsers,
    },
  ],
};
