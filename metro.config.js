// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  * 
//  */
// const config = {};


// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 * 
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  // Add your custom Metro configurations here (if needed)
};

// First, merge the default config with your custom config
const mergedConfig = mergeConfig(getDefaultConfig(__dirname), config);

// Then wrap the merged config with Reanimated's Metro config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);




