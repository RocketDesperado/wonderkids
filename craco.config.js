// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [],
        },
    },
    webpack: {
        configure: (webpackConfig) => {
            // Add rule for SVG files
            webpackConfig.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            });

            return webpackConfig;
        },
    },
};
