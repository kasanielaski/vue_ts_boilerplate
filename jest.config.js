module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    transformIgnorePatterns: ['node_modules/(?!(vuetify)/)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: ['<rootDir>/src/components/__tests__/*.spec.(js|ts)'],
    testURL: 'http://localhost/',
    globals: {
        'ts-jest': {
            babelConfig: true
        }
    },
    setupFiles: ['./jest-setup.js']
};
