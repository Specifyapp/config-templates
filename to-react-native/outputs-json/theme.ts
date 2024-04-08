import { Easing } from 'react-native';

/**
* @typedef {typeof gradientPaths} GradientPaths - All the valid paths for the tokens of type gradient.
* To use this type you can do: `@type {import('path/to/myTokensFile').GradientPaths}`
*/
export const gradientPaths = /** @type {const} */ ([ 'colorStyles.simpleGradient' ] as const);
export type GradientPaths = typeof gradientPaths;

/**
* @typedef {typeof shadowPaths} ShadowPaths - All the valid paths for the tokens of type shadow.
* To use this type you can do: `@type {import('path/to/myTokensFile').ShadowPaths}`
*/
export const shadowPaths = /** @type {const} */ ([ 'effectStyles.simpleShadow' ] as const);
export type ShadowPaths = typeof shadowPaths;

/**
* @typedef {typeof dimensionPaths} DimensionPaths - All the valid paths for the tokens of type dimension.
* To use this type you can do: `@type {import('path/to/myTokensFile').DimensionPaths}`
*/
export const dimensionPaths = /** @type {const} */ ([
  'sizes.btnPaddingHoz',
  'dimensions.spacings.spacing_5',
  'dimensions.spacings.spacing_3',
  'dimensions.spacings.spacing_4',
  'sizes.btnPaddingVer',
  'dimensions.spacings.spacing_6',
  'dimensions.avatarLarge',
  'dimensions.avatarSmall',
  'dimensions.avatarMedium',
  'dimensions.breakpoints.phone',
  'dimensions.breakpoints.desktop',
  'dimensions.breakpoints.tabletPortrait',
  'dimensions.breakpoints.tabletLandscape',
  'dimensions.radii.radiusLarge',
  'dimensions.radii.radiusSmall',
  'dimensions.radii.radiusMedium',
  'dimensions.radii.radiusXlarge',
  'dimensions.radii.radiusXsmall',
  'dimensions.radii.radiusXxlarge',
  'dimensions.radii.radiusXxsmall',
  'dimensions.spacings.spacing_1',
  'dimensions.spacings.spacing_2',
  'dimensions.spacings.spacing_7',
  'dimensions.spacings.spacing_8',
  'dimensions.spacings.spacing_9',
  'dimensions.spacings.spacing_10',
  'dimensions.spacings.spacing_11',
  'dimensions.spacings.spacing_12',
  'typeScale.copy.codeKerning',
  'typeScale.copy.codeLeading',
  'typeScale.copy.codeFontSize',
  'typeScale.copy.labelKerning',
  'typeScale.copy.labelLeading',
  'typeScale.copy.body_1Kerning',
  'typeScale.copy.body_1Leading',
  'typeScale.copy.body_2Kerning',
  'typeScale.copy.body_2Leading',
  'typeScale.copy.body_3Kerning',
  'typeScale.copy.body_3Leading',
  'typeScale.copy.labelFontSize',
  'typeScale.copy.body_1FontSize',
  'typeScale.copy.body_2FontSize',
  'typeScale.copy.body_3FontSize',
  'typeScale.copy.footnoteKerning',
  'typeScale.copy.footnoteLeading',
  'typeScale.copy.footnoteFontSize',
  'typeScale.headings.display_1Kerning',
  'typeScale.headings.display_1Leading',
  'typeScale.headings.display_2Kerning',
  'typeScale.headings.display_2Leading',
  'typeScale.headings.heading_1Kerning',
  'typeScale.headings.heading_1Leading',
  'typeScale.headings.heading_2Kerning',
  'typeScale.headings.heading_2Leading',
  'typeScale.headings.heading_3Kerning',
  'typeScale.headings.heading_3Leading',
  'typeScale.headings.display_1FontSize',
  'typeScale.headings.display_2FontSize',
  'typeScale.headings.heading_1FontSize',
  'typeScale.headings.heading_2FontSize',
  'typeScale.headings.heading_3FontSize'
] as const);
export type DimensionPaths = typeof dimensionPaths;

/**
* @typedef {typeof colorPaths} ColorPaths - All the valid paths for the tokens of type color.
* To use this type you can do: `@type {import('path/to/myTokensFile').ColorPaths}`
*/
export const colorPaths = /** @type {const} */ ([
  'colors.icon.error',
  'colors.global.redBase',
  'colors.icon.default',
  'colors.global.neutral_6',
  'colors.icon.success',
  'colors.global.greenBase',
  'colors.icon.warning',
  'colors.global.orangeBase',
  'colors.icon.disabled',
  'colors.global.neutral_4',
  'colors.icon.selected',
  'colors.global.appVioletBase',
  'colors.icon.onColoredBg',
  'colors.global.neutral_1',
  'colors.icon.info',
  'colors.global.blueBase',
  'colors.text.error',
  'colors.text.active',
  'colors.global.appVioletDark',
  'colors.text.success',
  'colors.text.warning',
  'colors.text.lowEmphasis',
  'colors.text.highEmphasis',
  'colors.global.neutral_9',
  'colors.text.onColoredBg',
  'colors.text.mediumEmphasis',
  'colors.global.neutral_8',
  'colors.text.info',
  'colors.global.redDark',
  'colors.global.neutral_2',
  'colors.global.neutral_3',
  'colors.global.neutral_5',
  'colors.global.neutral_7',
  'colors.global.redLight',
  'colors.global.redLighter',
  'colors.global.blueLighter',
  'colors.global.orangeLight',
  'colors.global.greenLighter',
  'colors.global.orangeLighter',
  'colors.global.appVioletLight',
  'colors.global.appVioletLighter',
  'colors.skeleton.default',
  'colors.borderComponent.error',
  'colors.borderComponent.active',
  'colors.borderComponent.darkestBorder',
  'colors.borderComponent.lightestBorder',
  'colors.backgroundComponent.info',
  'colors.backgroundComponent.child',
  'colors.backgroundComponent.error',
  'colors.backgroundComponent.input',
  'colors.backgroundComponent.parent',
  'colors.backgroundComponent.success',
  'colors.backgroundComponent.tooltip',
  'colors.backgroundComponent.warning',
  'colors.backgroundComponent.disabled',
  'colors.backgroundComponent.highlight',
  'colors.backgroundComponent.elevatedElement',
  'colors.backgroundComponent.hoverOnDarkest',
  'colors.backgroundComponent.hoverOnLightest',
  'colors.backgroundSurface.overlay',
  'colors.backgroundSurface.surface_1',
  'colors.backgroundSurface.surface_2',
  'colors.backgroundSurface.surface_3',
  'colors.backgroundSurface.surfaceGlass',
  'colors.backgroundSurface.marketingBackground',
  'colors.borderButton.warningHover',
  'colors.borderButton.primaryDefault',
  'colors.borderButton.primaryFocused',
  'colors.borderButton.secondaryDefault',
  'colors.borderButton.destructiveDefault',
  'colors.borderButton.destructiveFocused',
  'colors.backgroundButton.primaryHover',
  'colors.backgroundButton.primaryActive',
  'colors.backgroundButton.warningActive',
  'colors.backgroundButton.primaryDefault',
  'colors.backgroundButton.secondaryHover',
  'colors.backgroundButton.warningDefault',
  'colors.backgroundButton.secondaryActive',
  'colors.backgroundButton.destructiveHover',
  'colors.backgroundButton.secondaryDefault',
  'colors.backgroundButton.destructiveActive',
  'colors.backgroundButton.destructiveDefault',
  'colors.backgroundButton.destructiveTextHover'
] as const);
export type ColorPaths = typeof colorPaths;

/**
* @typedef {typeof textStylePaths} TextstylePaths - All the valid paths for the tokens of type textStyle.
* To use this type you can do: `@type {import('path/to/myTokensFile').TextstylePaths}`
*/
export const textStylePaths = /** @type {const} */ ([
  'textStyles.bodyL',
  'textStyles.bodyS',
  'textStyles.header',
  'textStyles.bodyM'
] as const);
export type TextstylePaths = typeof textStylePaths;

/**
* @typedef {typeof sizesPaths} SizesPaths - All the valid paths for the collection sizes.
* To use this type you can do: `@type {import('path/to/myTokensFile').SizesPaths}`
*/
export const sizesPaths = /** @type {const} */ ([ 'sizes.btnPaddingHoz', 'sizes.btnPaddingVer' ] as const);
export type SizesPaths = typeof sizesPaths;

/**
* @typedef {typeof dimensionsPaths} DimensionsPaths - All the valid paths for the collection dimensions.
* To use this type you can do: `@type {import('path/to/myTokensFile').DimensionsPaths}`
*/
export const dimensionsPaths = /** @type {const} */ ([
  'dimensions.spacings.spacing_5',
  'dimensions.spacings.spacing_3',
  'dimensions.spacings.spacing_4',
  'dimensions.spacings.spacing_6',
  'dimensions.avatarLarge',
  'dimensions.avatarSmall',
  'dimensions.avatarMedium',
  'dimensions.breakpoints.phone',
  'dimensions.breakpoints.desktop',
  'dimensions.breakpoints.tabletPortrait',
  'dimensions.breakpoints.tabletLandscape',
  'dimensions.radii.radiusLarge',
  'dimensions.radii.radiusSmall',
  'dimensions.radii.radiusMedium',
  'dimensions.radii.radiusXlarge',
  'dimensions.radii.radiusXsmall',
  'dimensions.radii.radiusXxlarge',
  'dimensions.radii.radiusXxsmall',
  'dimensions.spacings.spacing_1',
  'dimensions.spacings.spacing_2',
  'dimensions.spacings.spacing_7',
  'dimensions.spacings.spacing_8',
  'dimensions.spacings.spacing_9',
  'dimensions.spacings.spacing_10',
  'dimensions.spacings.spacing_11',
  'dimensions.spacings.spacing_12'
] as const);
export type DimensionsPaths = typeof dimensionsPaths;

/**
* @typedef {typeof colorsPaths} ColorsPaths - All the valid paths for the collection colors.
* To use this type you can do: `@type {import('path/to/myTokensFile').ColorsPaths}`
*/
export const colorsPaths = /** @type {const} */ ([
  'colors.icon.error',
  'colors.global.redBase',
  'colors.icon.default',
  'colors.global.neutral_6',
  'colors.icon.success',
  'colors.global.greenBase',
  'colors.icon.warning',
  'colors.global.orangeBase',
  'colors.icon.disabled',
  'colors.global.neutral_4',
  'colors.icon.selected',
  'colors.global.appVioletBase',
  'colors.icon.onColoredBg',
  'colors.global.neutral_1',
  'colors.icon.info',
  'colors.global.blueBase',
  'colors.text.error',
  'colors.text.active',
  'colors.global.appVioletDark',
  'colors.text.success',
  'colors.text.warning',
  'colors.text.lowEmphasis',
  'colors.text.highEmphasis',
  'colors.global.neutral_9',
  'colors.text.onColoredBg',
  'colors.text.mediumEmphasis',
  'colors.global.neutral_8',
  'colors.text.info',
  'colors.global.redDark',
  'colors.global.neutral_2',
  'colors.global.neutral_3',
  'colors.global.neutral_5',
  'colors.global.neutral_7',
  'colors.global.redLight',
  'colors.global.redLighter',
  'colors.global.blueLighter',
  'colors.global.orangeLight',
  'colors.global.greenLighter',
  'colors.global.orangeLighter',
  'colors.global.appVioletLight',
  'colors.global.appVioletLighter',
  'colors.skeleton.default',
  'colors.borderComponent.error',
  'colors.borderComponent.active',
  'colors.borderComponent.darkestBorder',
  'colors.borderComponent.lightestBorder',
  'colors.backgroundComponent.info',
  'colors.backgroundComponent.child',
  'colors.backgroundComponent.error',
  'colors.backgroundComponent.input',
  'colors.backgroundComponent.parent',
  'colors.backgroundComponent.success',
  'colors.backgroundComponent.tooltip',
  'colors.backgroundComponent.warning',
  'colors.backgroundComponent.disabled',
  'colors.backgroundComponent.highlight',
  'colors.backgroundComponent.elevatedElement',
  'colors.backgroundComponent.hoverOnDarkest',
  'colors.backgroundComponent.hoverOnLightest',
  'colors.backgroundSurface.overlay',
  'colors.backgroundSurface.surface_1',
  'colors.backgroundSurface.surface_2',
  'colors.backgroundSurface.surface_3',
  'colors.backgroundSurface.surfaceGlass',
  'colors.backgroundSurface.marketingBackground',
  'colors.borderButton.warningHover',
  'colors.borderButton.primaryDefault',
  'colors.borderButton.primaryFocused',
  'colors.borderButton.secondaryDefault',
  'colors.borderButton.destructiveDefault',
  'colors.borderButton.destructiveFocused',
  'colors.backgroundButton.primaryHover',
  'colors.backgroundButton.primaryActive',
  'colors.backgroundButton.warningActive',
  'colors.backgroundButton.primaryDefault',
  'colors.backgroundButton.secondaryHover',
  'colors.backgroundButton.warningDefault',
  'colors.backgroundButton.secondaryActive',
  'colors.backgroundButton.destructiveHover',
  'colors.backgroundButton.secondaryDefault',
  'colors.backgroundButton.destructiveActive',
  'colors.backgroundButton.destructiveDefault',
  'colors.backgroundButton.destructiveTextHover'
] as const);
export type ColorsPaths = typeof colorsPaths;

/**
* @typedef {typeof typeScalePaths} TypescalePaths - All the valid paths for the collection typeScale.
* To use this type you can do: `@type {import('path/to/myTokensFile').TypescalePaths}`
*/
export const typeScalePaths = /** @type {const} */ ([
  'typeScale.copy.codeKerning',
  'typeScale.copy.codeLeading',
  'typeScale.copy.codeFontSize',
  'typeScale.copy.labelKerning',
  'typeScale.copy.labelLeading',
  'typeScale.copy.body_1Kerning',
  'typeScale.copy.body_1Leading',
  'typeScale.copy.body_2Kerning',
  'typeScale.copy.body_2Leading',
  'typeScale.copy.body_3Kerning',
  'typeScale.copy.body_3Leading',
  'typeScale.copy.labelFontSize',
  'typeScale.copy.body_1FontSize',
  'typeScale.copy.body_2FontSize',
  'typeScale.copy.body_3FontSize',
  'typeScale.copy.footnoteKerning',
  'typeScale.copy.footnoteLeading',
  'typeScale.copy.footnoteFontSize',
  'typeScale.headings.display_1Kerning',
  'typeScale.headings.display_1Leading',
  'typeScale.headings.display_2Kerning',
  'typeScale.headings.display_2Leading',
  'typeScale.headings.heading_1Kerning',
  'typeScale.headings.heading_1Leading',
  'typeScale.headings.heading_2Kerning',
  'typeScale.headings.heading_2Leading',
  'typeScale.headings.heading_3Kerning',
  'typeScale.headings.heading_3Leading',
  'typeScale.headings.display_1FontSize',
  'typeScale.headings.display_2FontSize',
  'typeScale.headings.heading_1FontSize',
  'typeScale.headings.heading_2FontSize',
  'typeScale.headings.heading_3FontSize'
] as const);
export type TypescalePaths = typeof typeScalePaths;

/**
* @typedef {GradientPaths | ShadowPaths | DimensionPaths | ColorPaths | TextstylePaths | SizesPaths | DimensionsPaths | ColorsPaths | TypescalePaths} AllPath - All possible paths
*/
export type AllPath = GradientPaths | ShadowPaths | DimensionPaths | ColorPaths | TextstylePaths | SizesPaths | DimensionsPaths | ColorsPaths | TypescalePaths;

/**
* @typedef {typeof pathsByType} PathsByType - All the paths for a given token type. Needed for `getTokensByType`
*/
const pathsByType = /** @type {const} */ ({
  gradient: gradientPaths,
  shadow: shadowPaths,
  dimension: dimensionPaths,
  color: colorPaths,
  textStyle: textStylePaths,
}) as const;
type PathsByType = typeof pathsByType;

/**
* @typedef {typeof gradientModes[number]} GradientModes - All the valid modes of gradient.
* To use this type you can do: `@type {import('path/to/myTokensFile').GradientModes}`
*/
export const gradientModes = /** @type {const} */ ([ 'default' ]) as const;
export type GradientModes = typeof gradientModes[number];

/**
* @typedef {typeof shadowModes[number]} ShadowModes - All the valid modes of shadow.
* To use this type you can do: `@type {import('path/to/myTokensFile').ShadowModes}`
*/
export const shadowModes = /** @type {const} */ ([ 'default' ]) as const;
export type ShadowModes = typeof shadowModes[number];

/**
* @typedef {typeof dimensionModes[number]} DimensionModes - All the valid modes of dimension.
* To use this type you can do: `@type {import('path/to/myTokensFile').DimensionModes}`
*/
export const dimensionModes = /** @type {const} */ ([ 'large', 'medium', 'small', 'mode', 'desktop', 'mobile' ]) as const;
export type DimensionModes = typeof dimensionModes[number];

/**
* @typedef {typeof colorModes[number]} ColorModes - All the valid modes of color.
* To use this type you can do: `@type {import('path/to/myTokensFile').ColorModes}`
*/
export const colorModes = /** @type {const} */ ([ 'dark', 'light' ]) as const;
export type ColorModes = typeof colorModes[number];

/**
* @typedef {typeof textStyleModes[number]} TextstyleModes - All the valid modes of textStyle.
* To use this type you can do: `@type {import('path/to/myTokensFile').TextstyleModes}`
*/
export const textStyleModes = /** @type {const} */ ([ 'default' ]) as const;
export type TextstyleModes = typeof textStyleModes[number];

/**
* @typedef {typeof sizesModes[number]} SizesModes - All the valid modes of sizes.
* To use this type you can do: `@type {import('path/to/myTokensFile').SizesModes}`
*/
export const sizesModes = /** @type {const} */ ([ 'small', 'medium', 'large' ]) as const;
export type SizesModes = typeof sizesModes[number];

/**
* @typedef {typeof dimensionsModes[number]} DimensionsModes - All the valid modes of dimensions.
* To use this type you can do: `@type {import('path/to/myTokensFile').DimensionsModes}`
*/
export const dimensionsModes = /** @type {const} */ ([ 'mode' ]) as const;
export type DimensionsModes = typeof dimensionsModes[number];

/**
* @typedef {typeof colorsModes[number]} ColorsModes - All the valid modes of colors.
* To use this type you can do: `@type {import('path/to/myTokensFile').ColorsModes}`
*/
export const colorsModes = /** @type {const} */ ([ 'light', 'dark' ]) as const;
export type ColorsModes = typeof colorsModes[number];

/**
* @typedef {typeof typeScaleModes[number]} TypescaleModes - All the valid modes of typeScale.
* To use this type you can do: `@type {import('path/to/myTokensFile').TypescaleModes}`
*/
export const typeScaleModes = /** @type {const} */ ([ 'desktop', 'mobile' ]) as const;
export type TypescaleModes = typeof typeScaleModes[number];

/**
* @typedef {GradientModes | ShadowModes | DimensionModes | ColorModes | TextstyleModes | SizesModes | DimensionsModes | ColorsModes | TypescaleModes} AllMode - All the available modes
*/
export type AllMode = GradientModes | ShadowModes | DimensionModes | ColorModes | TextstyleModes | SizesModes | DimensionsModes | ColorsModes | TypescaleModes;

/**
* @typedef {typeof tokens} Tokens - All the tokens.
* Use `getTokenByMode` to retrieve one.
*/
export const tokens = /** @type {const} */ ({
  'colorStyles.simpleGradient': {
    default: { colors: undefined, colorsPositions: undefined, angle: 0 }
  },
  'effectStyles.simpleShadow': {
    default: {
      type: 'outer',
      offsetX: '0px',
      offsetY: '4px',
      color: 'rgba(0, 0, 0, 0.25)',
      blurRadius: '4px',
      spreadRadius: '0px'
    }
  },
  'sizes.btnPaddingHoz': { large: '8px', medium: '6px', small: '4px' },
  'dimensions.spacings.spacing_5': { mode: '8px' },
  'dimensions.spacings.spacing_3': { mode: '4px' },
  'dimensions.spacings.spacing_4': { mode: '6px' },
  'sizes.btnPaddingVer': { large: '12px', medium: '12px', small: '12px' },
  'dimensions.spacings.spacing_6': { mode: '12px' },
  'dimensions.avatarLarge': { mode: '32px' },
  'dimensions.avatarSmall': { mode: '16px' },
  'dimensions.avatarMedium': { mode: '24px' },
  'dimensions.breakpoints.phone': { mode: '390px' },
  'dimensions.breakpoints.desktop': { mode: '1400px' },
  'dimensions.breakpoints.tabletPortrait': { mode: '780px' },
  'dimensions.breakpoints.tabletLandscape': { mode: '1200px' },
  'dimensions.radii.radiusLarge': { mode: '12px' },
  'dimensions.radii.radiusSmall': { mode: '6px' },
  'dimensions.radii.radiusMedium': { mode: '8px' },
  'dimensions.radii.radiusXlarge': { mode: '16px' },
  'dimensions.radii.radiusXsmall': { mode: '2px' },
  'dimensions.radii.radiusXxlarge': { mode: '24px' },
  'dimensions.radii.radiusXxsmall': { mode: '4px' },
  'dimensions.spacings.spacing_1': { mode: '0px' },
  'dimensions.spacings.spacing_2': { mode: '2px' },
  'dimensions.spacings.spacing_7': { mode: '16px' },
  'dimensions.spacings.spacing_8': { mode: '24px' },
  'dimensions.spacings.spacing_9': { mode: '32px' },
  'dimensions.spacings.spacing_10': { mode: '48px' },
  'dimensions.spacings.spacing_11': { mode: '64px' },
  'dimensions.spacings.spacing_12': { mode: '96px' },
  'typeScale.copy.codeKerning': { desktop: '0px', mobile: '0px' },
  'typeScale.copy.codeLeading': { desktop: '20px', mobile: '20px' },
  'typeScale.copy.codeFontSize': { desktop: '14px', mobile: '14px' },
  'typeScale.copy.labelKerning': { desktop: '1.2000000476837158px', mobile: '0.4000000059604645px' },
  'typeScale.copy.labelLeading': { desktop: '20px', mobile: '20px' },
  'typeScale.copy.body_1Kerning': { desktop: '0px', mobile: '0px' },
  'typeScale.copy.body_1Leading': { desktop: '32px', mobile: '24px' },
  'typeScale.copy.body_2Kerning': { desktop: '0px', mobile: '0px' },
  'typeScale.copy.body_2Leading': { desktop: '24px', mobile: '24px' },
  'typeScale.copy.body_3Kerning': { desktop: '0px', mobile: '0px' },
  'typeScale.copy.body_3Leading': { desktop: '24px', mobile: '24px' },
  'typeScale.copy.labelFontSize': { desktop: '12px', mobile: '12px' },
  'typeScale.copy.body_1FontSize': { desktop: '18px', mobile: '16px' },
  'typeScale.copy.body_2FontSize': { desktop: '16px', mobile: '14px' },
  'typeScale.copy.body_3FontSize': { desktop: '14px', mobile: '14px' },
  'typeScale.copy.footnoteKerning': { desktop: '0px', mobile: '0px' },
  'typeScale.copy.footnoteLeading': { desktop: '24px', mobile: '24px' },
  'typeScale.copy.footnoteFontSize': { desktop: '14px', mobile: '14px' },
  'typeScale.headings.display_1Kerning': { desktop: '-1px', mobile: '-1px' },
  'typeScale.headings.display_1Leading': { desktop: '64px', mobile: '40px' },
  'typeScale.headings.display_2Kerning': { desktop: '-1px', mobile: '-1px' },
  'typeScale.headings.display_2Leading': { desktop: '48px', mobile: '40px' },
  'typeScale.headings.heading_1Kerning': { desktop: '0px', mobile: '0px' },
  'typeScale.headings.heading_1Leading': { desktop: '40px', mobile: '36px' },
  'typeScale.headings.heading_2Kerning': { desktop: '0px', mobile: '0px' },
  'typeScale.headings.heading_2Leading': { desktop: '32px', mobile: '28px' },
  'typeScale.headings.heading_3Kerning': { desktop: '0px', mobile: '0px' },
  'typeScale.headings.heading_3Leading': { desktop: '32px', mobile: '28px' },
  'typeScale.headings.display_1FontSize': { desktop: '56px', mobile: '32px' },
  'typeScale.headings.display_2FontSize': { desktop: '40px', mobile: '32px' },
  'typeScale.headings.heading_1FontSize': { desktop: '32px', mobile: '28px' },
  'typeScale.headings.heading_2FontSize': { desktop: '24px', mobile: '22px' },
  'typeScale.headings.heading_3FontSize': { desktop: '20px', mobile: '18px' },
  'colors.icon.error': { dark: 'rgb(221, 72, 64)', light: 'rgb(245, 72, 63)' },
  'colors.global.redBase': { dark: 'rgb(221, 72, 64)', light: 'rgb(245, 72, 63)' },
  'colors.icon.default': { dark: 'rgb(120, 126, 135)', light: 'rgb(120, 139, 165)' },
  'colors.global.neutral_6': { dark: 'rgb(120, 126, 135)', light: 'rgb(120, 139, 165)' },
  'colors.icon.success': { dark: 'rgb(125, 216, 121)', light: 'rgb(88, 205, 82)' },
  'colors.global.greenBase': { dark: 'rgb(125, 216, 121)', light: 'rgb(88, 205, 82)' },
  'colors.icon.warning': { dark: 'rgb(255, 158, 41)', light: 'rgb(255, 142, 5)' },
  'colors.global.orangeBase': { dark: 'rgb(255, 158, 41)', light: 'rgb(255, 142, 5)' },
  'colors.icon.disabled': { dark: 'rgb(68, 71, 75)', light: 'rgb(204, 213, 225)' },
  'colors.global.neutral_4': { dark: 'rgb(68, 71, 75)', light: 'rgb(204, 213, 225)' },
  'colors.icon.selected': { dark: 'rgb(98, 77, 227)', light: 'rgb(98, 77, 227)' },
  'colors.global.appVioletBase': { dark: 'rgb(98, 77, 227)', light: 'rgb(98, 77, 227)' },
  'colors.icon.onColoredBg': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.global.neutral_1': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.icon.info': { dark: 'rgb(96, 168, 250)', light: 'rgb(17, 125, 249)' },
  'colors.global.blueBase': { dark: 'rgb(96, 168, 250)', light: 'rgb(17, 125, 249)' },
  'colors.text.error': { dark: 'rgb(221, 72, 64)', light: 'rgb(245, 72, 63)' },
  'colors.text.active': { dark: 'rgb(154, 144, 223)', light: 'rgb(98, 77, 227)' },
  'colors.global.appVioletDark': { dark: 'rgb(154, 144, 223)', light: 'rgb(73, 56, 195)' },
  'colors.text.success': { dark: 'rgb(125, 216, 121)', light: 'rgb(88, 205, 82)' },
  'colors.text.warning': { dark: 'rgb(255, 158, 41)', light: 'rgb(255, 142, 5)' },
  'colors.text.lowEmphasis': { dark: 'rgb(120, 126, 135)', light: 'rgb(120, 139, 165)' },
  'colors.text.highEmphasis': { dark: 'rgb(255, 255, 255)', light: 'rgb(24, 30, 37)' },
  'colors.global.neutral_9': { dark: 'rgb(255, 255, 255)', light: 'rgb(24, 30, 37)' },
  'colors.text.onColoredBg': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.text.mediumEmphasis': { dark: 'rgb(244, 245, 245)', light: 'rgb(50, 59, 72)' },
  'colors.global.neutral_8': { dark: 'rgb(244, 245, 245)', light: 'rgb(50, 59, 72)' },
  'colors.text.info': { dark: 'rgb(96, 168, 250)', light: 'rgb(17, 125, 249)' },
  'colors.global.redDark': { dark: 'rgb(227, 105, 99)', light: 'rgb(219, 38, 44)' },
  'colors.global.neutral_2': { dark: 'rgb(39, 40, 43)', light: 'rgb(246, 248, 251)' },
  'colors.global.neutral_3': { dark: 'rgb(49, 50, 53)', light: 'rgb(222, 228, 237)' },
  'colors.global.neutral_5': { dark: 'rgb(92, 96, 102)', light: 'rgb(179, 192, 208)' },
  'colors.global.neutral_7': { dark: 'rgb(174, 178, 183)', light: 'rgb(92, 111, 138)' },
  'colors.global.redLight': { dark: 'rgb(183, 64, 58)', light: 'rgb(255, 113, 92)' },
  'colors.global.redLighter': { dark: 'rgb(60, 38, 39)', light: 'rgb(254, 228, 226)' },
  'colors.global.blueLighter': { dark: 'rgb(41, 52, 67)', light: 'rgb(219, 236, 254)' },
  'colors.global.orangeLight': { dark: 'rgb(105, 82, 58)', light: 'rgb(255, 223, 184)' },
  'colors.global.greenLighter': { dark: 'rgb(45, 60, 48)', light: 'rgb(230, 247, 229)' },
  'colors.global.orangeLighter': { dark: 'rgb(65, 51, 36)', light: 'rgb(255, 244, 230)' },
  'colors.global.appVioletLight': { dark: 'rgb(84, 67, 188)', light: 'rgb(138, 120, 238)' },
  'colors.global.appVioletLighter': { dark: 'rgb(54, 42, 121)', light: 'rgb(231, 228, 251)' },
  'colors.skeleton.default': { dark: 'rgb(39, 40, 43)', light: 'rgb(246, 248, 251)' },
  'colors.borderComponent.error': { dark: 'rgb(221, 72, 64)', light: 'rgb(245, 72, 63)' },
  'colors.borderComponent.active': { dark: 'rgb(98, 77, 227)', light: 'rgb(98, 77, 227)' },
  'colors.borderComponent.darkestBorder': { dark: 'rgb(174, 178, 183)', light: 'rgb(92, 111, 138)' },
  'colors.borderComponent.lightestBorder': { dark: 'rgb(49, 50, 53)', light: 'rgb(222, 228, 237)' },
  'colors.backgroundComponent.info': { dark: 'rgb(41, 52, 67)', light: 'rgb(219, 236, 254)' },
  'colors.backgroundComponent.child': { dark: 'rgb(39, 40, 43)', light: 'rgb(246, 248, 251)' },
  'colors.backgroundComponent.error': { dark: 'rgb(60, 38, 39)', light: 'rgb(254, 228, 226)' },
  'colors.backgroundComponent.input': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.backgroundComponent.parent': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.backgroundComponent.success': { dark: 'rgb(45, 60, 48)', light: 'rgb(230, 247, 229)' },
  'colors.backgroundComponent.tooltip': { dark: 'rgb(255, 255, 255)', light: 'rgb(24, 30, 37)' },
  'colors.backgroundComponent.warning': { dark: 'rgb(65, 51, 36)', light: 'rgb(255, 244, 230)' },
  'colors.backgroundComponent.disabled': { dark: 'rgb(39, 40, 43)', light: 'rgb(246, 248, 251)' },
  'colors.backgroundComponent.highlight': { dark: 'rgb(54, 42, 121)', light: 'rgb(231, 228, 251)' },
  'colors.backgroundComponent.elevatedElement': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.backgroundComponent.hoverOnDarkest': { dark: 'rgb(49, 50, 53)', light: 'rgb(222, 228, 237)' },
  'colors.backgroundComponent.hoverOnLightest': { dark: 'rgb(39, 40, 43)', light: 'rgb(246, 248, 251)' },
  'colors.backgroundSurface.overlay': { dark: 'rgb(255, 255, 255)', light: 'rgb(24, 30, 37)' },
  'colors.backgroundSurface.surface_1': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.backgroundSurface.surface_2': { dark: 'rgb(39, 40, 43)', light: 'rgb(246, 248, 251)' },
  'colors.backgroundSurface.surface_3': { dark: 'rgb(49, 50, 53)', light: 'rgb(222, 228, 237)' },
  'colors.backgroundSurface.surfaceGlass': { dark: 'rgba(24, 30, 37, 0.8)', light: 'rgba(255, 255, 255, 0.64)' },
  'colors.backgroundSurface.marketingBackground': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.borderButton.warningHover': { dark: 'rgb(105, 82, 58)', light: 'rgb(255, 223, 184)' },
  'colors.borderButton.primaryDefault': { dark: 'rgb(154, 144, 223)', light: 'rgb(73, 56, 195)' },
  'colors.borderButton.primaryFocused': { dark: 'rgb(54, 42, 121)', light: 'rgb(231, 228, 251)' },
  'colors.borderButton.secondaryDefault': { dark: 'rgb(49, 50, 53)', light: 'rgb(222, 228, 237)' },
  'colors.borderButton.destructiveDefault': { dark: 'rgb(227, 105, 99)', light: 'rgb(219, 38, 44)' },
  'colors.borderButton.destructiveFocused': { dark: 'rgb(60, 38, 39)', light: 'rgb(254, 228, 226)' },
  'colors.backgroundButton.primaryHover': { dark: 'rgb(154, 144, 223)', light: 'rgb(73, 56, 195)' },
  'colors.backgroundButton.primaryActive': { dark: 'rgb(84, 67, 188)', light: 'rgb(138, 120, 238)' },
  'colors.backgroundButton.warningActive': { dark: 'rgb(105, 82, 58)', light: 'rgb(255, 223, 184)' },
  'colors.backgroundButton.primaryDefault': { dark: 'rgb(98, 77, 227)', light: 'rgb(98, 77, 227)' },
  'colors.backgroundButton.secondaryHover': { dark: 'rgb(39, 40, 43)', light: 'rgb(246, 248, 251)' },
  'colors.backgroundButton.warningDefault': { dark: 'rgb(65, 51, 36)', light: 'rgb(255, 244, 230)' },
  'colors.backgroundButton.secondaryActive': { dark: 'rgb(49, 50, 53)', light: 'rgb(222, 228, 237)' },
  'colors.backgroundButton.destructiveHover': { dark: 'rgb(227, 105, 99)', light: 'rgb(219, 38, 44)' },
  'colors.backgroundButton.secondaryDefault': { dark: 'rgb(31, 32, 35)', light: 'rgb(255, 255, 255)' },
  'colors.backgroundButton.destructiveActive': { dark: 'rgb(183, 64, 58)', light: 'rgb(255, 113, 92)' },
  'colors.backgroundButton.destructiveDefault': { dark: 'rgb(221, 72, 64)', light: 'rgb(245, 72, 63)' },
  'colors.backgroundButton.destructiveTextHover': { dark: 'rgb(60, 38, 39)', light: 'rgb(254, 228, 226)' },
  'textStyles.bodyL': {
    default: {
      fontStyle: 'normal',
      fontFamily: 'Inter',
      fontWeight: 'semi-bold',
      fontSize: '12px',
      textIndent: '0px',
      letterSpacing: '0%',
      textTransform: 'none',
      textDecoration: 'none'
    }
  },
  'textStyles.bodyS': {
    default: {
      fontStyle: 'normal',
      fontFamily: 'Inter',
      fontWeight: 'light',
      fontSize: '12px',
      textIndent: '0px',
      letterSpacing: '0%',
      textTransform: 'none',
      textDecoration: 'none'
    }
  },
  'textStyles.header': {
    default: {
      fontStyle: 'normal',
      fontFamily: 'Montserrat',
      fontWeight: 'semi-bold',
      fontSize: '40px',
      textIndent: '0px',
      letterSpacing: '0%',
      textTransform: 'none',
      textDecoration: 'none'
    }
  },
  'textStyles.bodyM': {
    default: {
      fontStyle: 'normal',
      fontFamily: 'Inter',
      fontWeight: 'regular',
      fontSize: '12px',
      textIndent: '0px',
      letterSpacing: '0%',
      textTransform: 'none',
      textDecoration: 'none'
    }
  }
}) as const;
type Tokens = typeof tokens;

/**
* Retrieve any token for a given mode.
* @template {AllPath} Path - A generic extending all the possible paths
* @template {Tokens[Path] extends Record<string, any>
    ? keyof Tokens[Path]
    : undefined} Mode - A generic representing all the valid modes for a given path
* @template {Tokens[Path] extends Record<string, any>
    ? Tokens[Path][Mode extends undefined ? never : Mode]
    : Tokens[Path]} Return - The return type
* @param {Path} path - The path to the token
* @param {Mode} mode - The mode of the token you want to retrieve
* @returns {Return} - The value of a token for a given mode
*/
export function getTokenByMode<
  Path extends keyof Tokens,
  Mode extends Tokens[Path] extends Record<string, any>
    ? keyof Tokens[Path]
    : undefined,
  Return extends Tokens[Path] extends Record<string, any>
    ? Tokens[Path][Mode extends undefined ? never : Mode]
    : Tokens[Path]>(path: Path, mode: Mode): Return {
  if (!tokens[path]) {
    throw new Error("Path: '" + path + "' doesn't exist. Here are all the valid paths:\n- " + Object.keys(tokens).join('\n- '))
  }

  if (typeof tokens[path] !== 'object') {
    return tokens[path] as Return;
  }

  if (!mode) throw new Error('Mode is undefined but it should be one of ' + Object.keys(tokens[path]).join(', ') + ' for path: ' + path);

  if (!tokens[path][mode]) {
    throw new Error("Invalid mode '" + mode.toString() + "' at path '" + path + "', here are all the valid modes:\n- " + Object.keys(tokens[path]).join('\n- '))
  }

  return tokens[path][mode] as Return;
}

/**
* Retrieve any token with its modes.
* @template {AllPath} Path - A generic extending all the possible paths
* @param {Path} path - The path to the token
* @returns {Tokens[Path]} - The value of a token with its modes
*/
export function getTokenWithModes<Path extends keyof Tokens>(path: Path): Tokens[Path] {
  if (!tokens[path]) {
    throw new Error("Path: '" + path + "' doesn't exist. Here are all the valid paths:\n- " + Object.keys(tokens).join('\n- '))
  }

  return tokens[path];
}

/**
* Retrieve all the tokens for a specific type (color, dimension, etc...).
* Note that the value will either be a string or an object if the token has modes
* @template {keyof PathsByType} Type - A generic extending all the possible types
* @template {Tokens[PathsByType[Type][number]]} Token - A generic representing a union of all the outputs
* @param {Type} type - The path to the token
* @returns {{ [Path in PathsByType[Type][number]]: Tokens[Path] }} - An array with all the values
*/
export function getTokensByType<Type extends keyof PathsByType>(type: Type) {
  if (!pathsByType[type]) {
    throw new Error('The type: \'' + type + '\' does not exist')
  }

  return pathsByType[type].reduce(
    (acc, path) => {
      // @ts-expect-error - Can't cast `path` to `Path`
      acc[path] = tokens[path];
      return acc;
    },
    {} as { [Path in PathsByType[Type][number]]: Tokens[Path] },
  );
}

/**
 * @typedef {T extends T ? keyof T : never} KeysOfUnion<T>
 * @template T
 */
type KeysOfUnion<T> = T extends T ? keyof T : never;

/**
 * @typedef {T[keyof T]} IndexSelf<T>
 * @template T
 */
type IndexSelf<T> = T[keyof T];

/**
 * @typedef {IndexSelf<{ [Path in keyof Tokens]: Tokens[Path] extends { [key in Mode]: any } ? Path : never; }>} ValidPathsFromMode<Mode>
 * @template {string} Mode
 */
export type ValidPathsFromMode<Mode extends string> = IndexSelf<{ [Path in keyof Tokens]: Tokens[Path] extends { [key in Mode]: any } ? Path : never; }>;

/**
 * @template {KeysOfUnion<Tokens[keyof Tokens]>} Mode
 * @param {Mode} mode - Any valid mode
 * @returns - A function that takes a token path which has the given mode
 */
export function withMode<Mode extends KeysOfUnion<Tokens[keyof Tokens]>>(mode: Mode) {
  /**
   * @template {ValidPathsFromMode<Mode>} Path
   * @template {Extract<keyof Tokens[Path], Mode>} ValidMode
   * @param {Path} path - A valid path for the given mode
   * @returns {Tokens[Path][ValidMode]}
   */
  return <Path extends ValidPathsFromMode<Mode>, ValidMode extends Extract<keyof Tokens[Path], Mode>>(
    path: Path
  ) => {
    if (!tokens[path]) {
      throw new Error("Invalid path: '" + path + "'")
    }

    if (!tokens[path][mode as unknown as ValidMode]) {
      throw new Error("Invalid mode: '" + mode + "' for path: '" + path + "'")
    }

    return tokens[path][mode as unknown as ValidMode];
  }
}


