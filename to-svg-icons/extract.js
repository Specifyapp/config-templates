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

const parsers = [
  // We only want to extract colors from the "Effect styles" group"
  {
    name: 'filter',
    options: {
      query: {
        where: {
          group: '^Vectors$',
          select: {
            children: true,
            // We don't want to keep the group in the output
            // This way, we create all our tokens in the outputs directory directly
            group: false,
          },
        },
      },
    },
  },
  // All common parsers for CSS custom properties
  // Here the change-case parser is used to convert the token names to kebab-case
  ...commonCssCustomPropertiesParsers,
  // Create the file
  // We apply the parser to generate the svg files
  // More on this parser here: https://docs.specifyapp.com/reference/parsers/svgo
  {
    name: 'svgo',
    options: {
      svgo: {
        plugins: [
          // remove dimensions but keep the viewBox
          {
            name: 'removeDimensions',
          },
        ],
      },
    },
    output: {
      type: 'directory',
      directoryPath: 'to-svg-icons/outputs/',
    },
  },
];

module.exports = {
  version: '2',
  personalAccessToken: env.SPECIFY_PERSONAL_ACCESS_TOKEN,
  repository: env.SPECIFY_TO_SVG_ICONS_REPOSITORY_NAME,
  rules: [
    {
      name: 'SVG / Optimized Icons',
      parsers,
    },
  ],
};
