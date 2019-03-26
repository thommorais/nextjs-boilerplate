const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const common = require('./common.config');

const nextConfig = {
  distDir: './dist',
  target: 'serverless',
  pageExtensions: ['jsx', 'js'],
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html'
    }
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...common.alias
    };

    return config;
  }
};

module.exports = common.compose(withBundleAnalyzer)(nextConfig);
