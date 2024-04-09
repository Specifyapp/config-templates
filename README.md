# config-templates

Templates for config files when using Specify

## Installation

- Clone this repository
- Run `npm install` or `yarn install` or `pnpm install` to install all dependencies
- Copy the `.env` file `cp .env.example .env` and fill the required fields

## Extract

- Run the extract command desired `yarn extract-xxx` | `npm run extract-xxx` | `pnpm run extract-xxx` replacing `xxx` with the desired template
- Check the output in the output folder created for each command

For each extract script there are two versions possible:
- The JS version
- The JSON version

For the JS version, you need to fill the `.env` file with the required fields. For the JSON file, You need to fill the required fields in the JSON file itself.

## Extract commands available

- `yarn extract-css` - Extract all tokens in CSS files. You can check the code and output in the folder `to-css`
- `yarn extract-css-json` - Extract all tokens in CSS files. You can check the code and output in the folder `to-css`
- `yarn extract-svg-icons` - Extract and optimize all SVG assets from a repository. You can check the code and output in the folder `to-svg-icons`
- `yarn extract-svg-icons-json` - Extract and optimize all svg tokens from a repository. You can check the code and output in the folder `to-svg-icons`
- `yarn extract-react-native` - Extract all tokens to a TypeScript in the React Native usable format. You can check the code and output in the folder `to-react-native`
- `yarn extract-react-native-json` - Extract all tokens to a TypeScript in the React Native usable format. You can check the code and output in the folder `to-react-native`
